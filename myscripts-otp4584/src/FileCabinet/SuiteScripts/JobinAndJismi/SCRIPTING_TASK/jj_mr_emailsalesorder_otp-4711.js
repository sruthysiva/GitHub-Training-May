/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(['N/currentRecord', 'N/email', 'N/file', 'N/record', 'N/search'],
    /**
 * @param{currentRecord} currentRecord
 * @param{email} email
 * @param{file} file
 * @param{record} record
 * @param{search} search
 */
    (currentRecord, email, file, record, search) => {
        /**
         * Defines the function that is executed at the beginning of the map/reduce process and generates the input data.
         * @param {Object} inputContext
         * @param {boolean} inputContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {Object} inputContext.ObjectRef - Object that references the input data
         * @typedef {Object} ObjectRef
         * @property {string|number} ObjectRef.id - Internal ID of the record instance that contains the input data
         * @property {string} ObjectRef.type - Type of the record instance that contains the input data
         * @returns {Array|Object|Search|ObjectRef|File|Query} The input data to use in the map/reduce process
         * @since 2015.2
         */

        const getInputData = (inputContext) => {

            let mySearch = search.create({
                type: search.Type.SALES_ORDER,
                id: 'customsearch_jj_salesid_01',
                title: 'JJ MR SALES ID SEARCH01 ',
                columns: ['tranid', 'salesrep'],
                filters: [['mainline', 'is', true], 'and', ['trandate', 'within', 'lastmonth']]
            });
            
            return mySearch;

        }

        /**
         * Defines the function that is executed when the map entry point is triggered. This entry point is triggered automatically
         * when the associated getInputData stage is complete. This function is applied to each key-value pair in the provided
         * context.
         * @param {Object} mapContext - Data collection containing the key-value pairs to process in the map stage. This parameter
         *     is provided automatically based on the results of the getInputData stage.
         * @param {Iterator} mapContext.errors - Serialized errors that were thrown during previous attempts to execute the map
         *     function on the current key-value pair
         * @param {number} mapContext.executionNo - Number of times the map function has been executed on the current key-value
         *     pair
         * @param {boolean} mapContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {string} mapContext.key - Key to be processed during the map stage
         * @param {string} mapContext.value - Value to be processed during the map stage
         * @since 2015.2
         */

        const map = (mapContext) => {

            var searchResult = JSON.parse(mapContext.value);

            var salesId = searchResult.id;

            var saleRep = searchResult.values['salesrep'];

            var salesrepId = saleRep.value

            //log.debug("sales rep ", saleRep);

            let results = []

            let saleObject = search.lookupFields({

                type: search.Type.SALES_ORDER,

                id: salesId,

                columns: ['entity', 'email', 'tranid', 'total']

            });

            var cusName = saleObject['entity'][0].text;

            results.push(cusName);

            results.push(saleObject.email);

            results.push(saleObject.tranid);

            results.push(saleObject.total);

            //log.debug("array", results)


            if (salesrepId) {

                mapContext.write({

                    key: salesrepId,

                    value: results

                });

            }

            else {

                mapContext.write({

                    key: -5,

                    value: results

                });

            }



        }


        /**
         * Defines the function that is executed when the reduce entry point is triggered. This entry point is triggered
         * automatically when the associated map stage is complete. This function is applied to each group in the provided context.
         * @param {Object} reduceContext - Data collection containing the groups to process in the reduce stage. This parameter is
         *     provided automatically based on the results of the map stage.
         * @param {Iterator} reduceContext.errors - Serialized errors that were thrown during previous attempts to execute the
         *     reduce function on the current group
         * @param {number} reduceContext.executionNo - Number of times the reduce function has been executed on the current group
         * @param {boolean} reduceContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {string} reduceContext.key - Key to be processed during the reduce stage
         * @param {List<String>} reduceContext.values - All values associated with a unique key that was passed to the reduce stage
         *     for processing
         * @since 2015.2
         */
        const reduce = (reduceContext) => {

            var redKey = reduceContext.key;
            var reduceValue = reduceContext.values;
            var len = reduceValue.length;
                //log.debug("values", redKey);
                //log.debug("length",len);



            var csvContent = "Customer Name, Email, Document Number,Sales Amount ";

            csvContent += "\n"


            for (let i = 0; i < len; i++) {

                var c1 = JSON.parse(reduceContext.values[i]);

                for (let j = 0; j < c1.length; j++) {

                    csvContent += c1[j];
                    csvContent += " , ";

                }

                csvContent += "\n";

                //log.debug("details",csvContent);
             }

            var fileObj = file.create({
                name: "Customer Sales order Detail.csv",
                fileType: file.Type.CSV,
                contents: csvContent,
                folder: 1207

            });

            var fileId = fileObj.save();

            log.debug("file has been created with id ", fileId);

            var adminkey = -5;



            if (redKey == -5) {

                email.send({
                    author: -5,
                    recipients: -5,
                    subject: "sales order details for the previous month",
                    body: "Please find the attached sales order details of the customer and assign a salesrep for the customers ",
                    attachments: [fileObj]

                });
            }

            else {

                email.send({
                    author: -5,
                    recipients: redKey,
                    subject: "sales order details for the previous month",
                    body: "Please find the attached sales order details of the customers ",
                    attachments: [fileObj]

                });



            }

        }




        


        /**
         * Defines the function that is executed when the summarize entry point is triggered. This entry point is triggered
         * automatically when the associated reduce stage is complete. This function is applied to the entire result set.
         * @param {Object} summaryContext - Statistics about the execution of a map/reduce script
         * @param {number} summaryContext.concurrency - Maximum concurrency number when executing parallel tasks for the map/reduce
         *     script
         * @param {Date} summaryContext.dateCreated - The date and time when the map/reduce script began running
         * @param {boolean} summaryContext.isRestarted - Indicates whether the current invocation of this function is the first
         *     invocation (if true, the current invocation is not the first invocation and this function has been restarted)
         * @param {Iterator} summaryContext.output - Serialized keys and values that were saved as output during the reduce stage
         * @param {number} summaryContext.seconds - Total seconds elapsed when running the map/reduce script
         * @param {number} summaryContext.usage - Total number of governance usage units consumed when running the map/reduce
         *     script
         * @param {number} summaryContext.yields - Total number of yields when running the map/reduce script
         * @param {Object} summaryContext.inputSummary - Statistics about the input stage
         * @param {Object} summaryContext.mapSummary - Statistics about the map stage
         * @param {Object} summaryContext.reduceSummary - Statistics about the reduce stage
         * @since 2015.2
         */
        const summarize = (summaryContext) => {

        }

        return { getInputData, map, reduce, summarize }

    });

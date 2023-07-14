/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/search'],
    /**
 * @param{record} record
 * @param{search} search
 */
    (record, search) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {

           let invoiceObj=search.create({
               type : search.Type.INVOICE,
               id : 'customsearch_jj_invoiceopen3',
               title : 'JJ INVOICE_OPEN_SEARCH',
               filters : [['status','anyof',['CustInvc:A']],'and',['mainline','is','T']],
               columns : ['entity','email','tranid','datecreated','amount']
            });

            invoiceObj.run().each(function(results)
            {
                var clientName=results.getText({
                    name :'entity'
                });

                var docID=results.getValue({
                    name : 'tranid'
                });
               
                var clientEmail = results.getText({
                    name : 'email'

                });

                var inAmount = results.getValue({
                    name : 'amount'
                });

                var createDate = results.getValue({
                    name : 'datecreated'
                });

                log.debug("Customer",clientName);  
                log.debug("email",clientEmail);
                log.debug("Internal ID",docID);
                log.debug("Amount",inAmount);
                log.debug("Date",createDate);
                

                return true;
            })

                let invoiceSearchId=invoiceObj.save();
                log.debug("customer search has been created ",invoiceSearchId);

            

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });

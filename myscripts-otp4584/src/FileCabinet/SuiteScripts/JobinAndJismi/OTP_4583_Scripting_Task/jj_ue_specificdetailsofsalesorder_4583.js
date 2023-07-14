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

            // let searchObj=search.create({
            //     type : search.Type.SALES_ORDER,
            //     id : 'customsearch_jj_specisalesorder1',
            //     title : 'JJ SPECIFIC SALESORDER SEARCH',
            //     columns : ['entity','tranid'],
            //     filters: ['tranid','is','1']

            // });
            
            var salesOrderId = 144;

            var myFieldsSearch = search.lookupFields({ 
                type: 'salesorder', 
                id: salesOrderId, 
                columns: ['entity', 'tranid'] 
            });

            var entityName = myFieldsSearch.entity;
            var tranID = myFieldsSearch.tranid;

            log.debug("entityName", entityName);
            log.debug("transactionID", tranID);
        
            // searchObj.run().each(function(results)
            // // {
            //     let cusName=results.getText({
            //         name : 'entity'
            //     });
            //     let docID=results.getValue({
            //         name : 'tranid'
            //     })

            //     log.debug("Customer Name : ",cusName);
            //     log.debug("Document Number : ",docID);

            //     return true;
            // });

            // let saleSearchId=searchObj.save();
            // log.debug("customer search has been created ",saleSearchId);


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

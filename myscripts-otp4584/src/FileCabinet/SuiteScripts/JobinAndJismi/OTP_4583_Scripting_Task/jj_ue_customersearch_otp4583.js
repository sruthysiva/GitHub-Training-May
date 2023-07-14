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

            let cusSearchObj=search.create({
                type : search.Type.CUSTOMER,
                id : 'customsearch_jj_cussearch03',
                title :'JJ LAST-MONTH-CREATED-CUSTOMER-SEARCH-NEW',
                columns : ['companyname','subsidiary','salesrep','email','datecreated'],
                filters : [['datecreated','within','lastmonth'],'and',['subsidiary','is','1']]
            });
            cusSearchObj.run().each(function(results)
            {
                var cusName=results.getValue({
                    name :'companyname'
                });
                var cusSubsidiary = results.getValue({
                    name : 'subsidiary'
                });
                var cusEmail = results.getValue({
                    name : 'email'

                });
                var cusSalerep = results.getText({
                    name : 'salesrep'
                });
                var cusDate = results.getValue({
                    name : 'datecreated'
                });

                log.debug("Customer",cusName);
                log.debug("Subsidiary",cusSubsidiary);
                log.debug("email",cusEmail);
                log.debug("sales rep",cusSalerep);
                log.debug("Date",cusDate);

                return true;
            })
           

                let cusSearchId=cusSearchObj.save();
                log.debug("customer search has been created ",cusSearchId);

                
               
        // var searchDeleteObject = search.delete({
               
        //     id: 'customsearch_jj_cussearch03'
        //     });
         
        //            log.debug("Search has been deleted"); 
                     
             

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

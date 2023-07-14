/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record'],
    /**
 * @param{record} record
 */
    (record) => {
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

            var supObject=record.create({
                type : record.Type.SALES_ORDER,
                isDynamic : true 
            });

            supObject.setValue({
                fieldId: 'entity',
                value: 40
   
            });

           supObject.selectNewLine({
            sublistId : 'item'
    
           });

            supObject.setCurrentSublistValue({
                sublistId: 'item',
                fieldId: 'item',
                lineId :0,
                value :68
            });

            supObject.setCurrentSublistValue({
                sublistId : 'item',
                fieldId : 'quantity',
                value : 10
            })

           
            supObject.commitLine({
                 sublistId:'item'
                 });


            let supId = supObject.save({
                enableSourcing : true,
                ignoreMandatoryFields : true
               });
    
               

            log.debug("sales order has been created successfully with Id ",supId);



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

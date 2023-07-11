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

           let saleObj=record.create({
            type : record.Type.SALES_ORDER,
            isDynamic : true
           });
           let saleEntity = saleObj.setValue({
            fieldId : 'entity',
            value : 58
           });
           saleObj.selectNewLine({
             sublistId : 'item'
           });
           saleObj.setCurrentSublistValue({
             sublistId : 'item',
             fieldId : 'item',
             value : 45
           });
           saleObj.setCurrentSublistValue({
            sublistId : 'item',
            fieldId : 'quantity',
            value : 10
           });
           saleObj.commitLine({
            sublistId : 'item'
           });

           saleObj.save({
            enableSourcing : true,
            ignoreMandatoryFields : true

           })


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

            const newRec = scriptContext.newRecord;
            if(newRec.type == record.Type.SALES_ORDER){
                let memoField = newRec.getValue({
                    fieldId : ""
                });
                if(memoField == true){
                    newRec.setValue({
                        fieldId : "memo",
                        value : "MemoUpdated"
                    })
                }
            }


        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        

        return { beforeLoad, beforeSubmit, afterSubmit }

    });

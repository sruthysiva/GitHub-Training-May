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

            if(scriptContext.type == scriptContext.UserEventType.CREATE){
                var newRec = scriptContext.newRecord;
                log.debug("New record",newRec);
                if (newRec.type == record.Type.SALES_ORDER){
                    let cusField = newRec.getValue({
                        fieldId : 'entity'
                    });
                    
                    let cuRecord = record.load({
                        type : record.Type.CUSTOMER,
                        id : cusField,
                        isDynamic : true
                    });
                    cuRecord.setValue({
                        fieldId : 'custentity_jj_ue_checkbox4583',
                        value : true
                    });
                    let cusId = cuRecord.save({
                        enablesourcing : true,
                        ignoreMandatoryFields : true
                    });

                    log.debug("Updation done successfully with Id",cusId);
                }
        
                if (newRec.type == record.Type.PURCHASE_ORDER){
                    let venField = newRec.getValue({
                        fieldId : 'entity'
                    });
                    
                    let venRecord = record.load({
                        type : record.Type.VENDOR,
                        id : venField,
                        isDynamic : true
                    });
                    venRecord.setValue({
                        fieldId : 'custentity_jj_ue_checkbox4583',
                        value : true
                    });
                    let venId = venRecord.save({
                        enablesourcing : true,
                        ignoreMandatoryFields : true
                    });

                    log.debug("Updation done successfully with Id",venId);
                }
            }

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });

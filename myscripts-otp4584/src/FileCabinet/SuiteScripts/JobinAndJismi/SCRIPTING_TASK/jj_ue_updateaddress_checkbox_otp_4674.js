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
0

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

            if (scriptContext.type === scriptContext.UserEventType.EDIT){

                var oldRecord = scriptContext.oldRecord;
                var newRecord = scriptContext.newRecord;
                var oldAdd = [];
                var newAdd = [];

                if (oldRecord.type == record.Type.CUSTOMER) {

                    var oldlineCount = oldRecord.getLineCount({
                        sublistId: 'addressbook'
                    });

                    for (var k = 0; k < oldlineCount; k++) {

                        var oldaddress = oldRecord.getSublistValue({
                            sublistId: 'addressbook',
                            fieldId: 'addressbookaddress_text',
                            line: k
                        });

                       // log.debug("old address", oldaddress);
                       oldAdd.push(oldaddress);
                    }

                }

                if (newRecord.type == record.Type.CUSTOMER) {

                    var newlineCount = newRecord.getLineCount({
                        sublistId: 'addressbook'
                    });
                    for (var j = 0; j < newlineCount; j++) {

                        var address = newRecord.getSublistValue({
                            sublistId: 'addressbook',
                            fieldId: 'addressbookaddress_text',
                            line: j
                        });
                       // log.debug("new address",address);
                       newAdd.push(address);
                    }
                }
                
                var oldAddress = JSON.stringify(oldAdd);
                var newAddress = JSON.stringify(newAdd);

                // covert the string array for comparison

                if((newAddress !== oldAddress) || (oldlineCount!=newlineCount)) {

                    newRecord.setValue({
                        fieldId : 'custentity_jj_address_change',
                        value : true
                    });
                   
                }
                else {
                    newRecord.setValue({
                        fieldId : 'custentity_jj_address_change',
                        value : false
                    });
                    
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
        const afterSubmit = (scriptContext) => {

}

return { beforeLoad, beforeSubmit, afterSubmit }

    });

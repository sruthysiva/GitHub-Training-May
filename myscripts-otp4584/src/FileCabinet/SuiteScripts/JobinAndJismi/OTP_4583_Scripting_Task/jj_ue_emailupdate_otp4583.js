/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/email', 'N/record', 'N/runtime'],
    /**
 * @param{email} email
 * @param{record} record
 * @param{runtime} runtime
 */
    (email, record, runtime) => {
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
            if (scriptContext.type == scriptContext.UserEventType.CREATE) {
                const newRec = scriptContext.newRecord;
                if (newRec.type == record.Type.CUSTOMER || newRec.type == record.Type.VENDOR || newRec.type == record.Type.CONTACT) {
                    var recordName = newRec.getValue({
                        fieldId: 'entityid'
                    });
                    var recordId = newRec.getValue({
                        fieldId : 'id'
                    })
                    var recordType = newRec.type;
                }

                // log.debug("record",recordName);
                // log.debug("type",recordType);
                // log.debug("id",recordId);


               
                var userEmail = runtime.getCurrentUser().email;
                
                //log.debug(userEmail);
                email.send({
                    author: 25,
                    recipients: userEmail,
                    subject: "Record created successfully ",
                    body: "Record type :"+recordType
                    +"***** Name : "+recordName
                    +"****** Internal Id : "+ recordId
                });
            }
            if (scriptContext.type == scriptContext.UserEventType.DELETE) {
                const oldRec = scriptContext.oldRecord;
                if (oldRec.type == record.Type.CUSTOMER || newRec.type == record.Type.VENDOR || newRec.type == record.Type.CONTACT) {
                    var recordName = oldRec.getValue({
                        fieldId: 'entityid'
                    });
                    var recordId = oldRec.getValue({
                        fieldId : 'id'
                    })
                    var recordType = oldRec.type;
                }

                // log.debug("record",recordName);
                // log.debug("type",recordType);
                // log.debug("id",recordId);


               
                var userEmail = runtime.getCurrentUser().email;
                
                //log.debug(userEmail);
                email.send({
                    author: 25,
                    recipients: userEmail,
                    subject: "** Record deleted ***",
                    body: "Record type :"+recordType
                    +"***** Name : "+recordName
                    +"****** Internal Id : "+ recordId
                });
            }
             
            
            }
        
        return { beforeLoad, beforeSubmit, afterSubmit }


    });

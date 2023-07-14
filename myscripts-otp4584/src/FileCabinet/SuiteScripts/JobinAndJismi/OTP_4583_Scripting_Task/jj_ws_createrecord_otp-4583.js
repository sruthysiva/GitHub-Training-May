/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define(['N/currentRecord', 'N/record', 'N/workflow'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{workflow} workflow
 */
    (currentRecord, record, workflow) => {
        /**
         * Defines the WorkflowAction script trigger point.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.workflowId - Internal ID of workflow which triggered this action
         * @param {string} scriptContext.type - Event type
         * @param {Form} scriptContext.form - Current form that the script uses to interact with the record
         * @since 2016.1
         */
        const onAction = (scriptContext) => {

            var newRec = scriptContext.newRecord;
            var title = newRec.getValue("title");
            var objVal = record.create({
                type : 'customrecordjj_ws_record',
                isDynamic : true
            });
            objVal.setValue({
                fieldId : 'name',
                value : title
            });
            objVal.setValue({
                fieldId : 'custrecordjj_ratingrecord',
                value : 'Testing Workflow Action'
            });

            var recId = objVal.save({
                enableSourcing : true,
                ignoreMandatoryFields : true
            });

            return recId ;


        }

        return {onAction};
    });

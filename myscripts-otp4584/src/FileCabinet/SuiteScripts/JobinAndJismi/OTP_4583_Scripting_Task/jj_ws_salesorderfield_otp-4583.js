/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define(['N/record', 'N/search', 'N/workflow'],
    /**
 * @param{record} record
 * @param{search} search
 * @param{workflow} workflow
 */
    (record, search, workflow) => {
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

            var newRecord = scriptContext.newRecord;
            
            
            var cusNumber = newRecord.getSublistValue({
                sublistId : 'item',
                fieldId : 'custcoljj_custom_number_workflow',
                line : 0
            });
       

            //log.debug(" number ",cusNumber);

            return cusNumber
            


        }

        return {onAction};
    });

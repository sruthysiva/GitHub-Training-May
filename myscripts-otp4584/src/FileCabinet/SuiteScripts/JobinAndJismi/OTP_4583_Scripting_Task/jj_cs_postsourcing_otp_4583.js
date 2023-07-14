/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/record'],
/**
 * @param{currentRecord} currentRecord
 * @param{record} record
 */
function(currentRecord, record) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    
    function postSourcing(scriptContext) {

        let currentRecord = scriptContext.currentRecord;
            let sublistName = scriptContext.sublistId;
            let fieldName = scriptContext.fieldId;
            let lineId = scriptContext.line;

            if (sublistName === 'item' && fieldName === 'item') {
                let amountRate = currentRecord.getCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: 'amount',
                    lineId : lineId
                });
                currentRecord.setCurrentSublistValue({

                    sublistId: 'item',
                    fieldId: 'amount',
                    value: amountRate * 2,
                    lineId : lineId
                })
                currentRecord.commitLine({
                    sublistId: 'item'
                });


    }
}


    return {
        
        postSourcing: postSourcing,
        
    };
    
});

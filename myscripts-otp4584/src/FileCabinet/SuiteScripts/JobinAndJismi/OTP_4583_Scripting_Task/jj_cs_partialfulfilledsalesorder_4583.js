/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/record', 'N/search','N/url'],
/**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{search} search
 */
function(currentRecord, record, search,url) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    // function pageInit(scriptContext) {

        
    // }

    // /**
    //  * Function to be executed when field is changed.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  * @param {string} scriptContext.fieldId - Field name
    //  * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
    //  * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
    //  *
    //  * @since 2015.2
    //  */
    function fieldChanged(scriptContext) {


        if(scriptContext.fieldId == 'cus_filter') {
            var cust1 = scriptContext.currentRecord.getValue({
                fieldId: 'cus_filter'
            });
            // console.log(cust1)
        }

        if(scriptContext.fieldId == 'status_filter') {
            var stat1 = scriptContext.currentRecord.getValue({
                fieldId: 'status_filter'
            });
            // console.log(stat1)
            // console.log(typeof(stat1));
        }

        if(scriptContext.fieldId == 'sub_filter') {
            var sub1 = scriptContext.currentRecord.getValue({
                fieldId: 'sub_filter'
            });
           
        }

        if(scriptContext.fieldId == 'dept_filter') {
            var dep1 = scriptContext.currentRecord.getValue({
                fieldId: 'dept_filter'
            });
           
        }

        

        document.location = url.resolveScript({
            scriptId: 'customscript_jj_sl_fullfilledsalesorder_otp_4583',
            deploymentId: 'customdeploy_jj_sl_custom_sales_otp_4719',
            params: {
                'z1': cust1,
                'z2': stat1,
                'z3': sub1,
                'z4': dep1
            }
        });


    }

    // /**
    //  * Function to be executed when field is slaved.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  * @param {string} scriptContext.fieldId - Field name
    //  *
    //  * @since 2015.2
    //  */
    // function postSourcing(scriptContext) {

    // }

    // /**
    //  * Function to be executed after sublist is inserted, removed, or edited.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  *
    //  * @since 2015.2
    //  */
    // function sublistChanged(scriptContext) {

    // }

    // /**
    //  * Function to be executed after line is selected.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  *
    //  * @since 2015.2
    //  */
    // function lineInit(scriptContext) {

    // }

    // /**
    //  * Validation function to be executed when field is changed.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  * @param {string} scriptContext.fieldId - Field name
    //  * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
    //  * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
    //  *
    //  * @returns {boolean} Return true if field is valid
    //  *
    //  * @since 2015.2
    //  */
    // function validateField(scriptContext) {

    // }

    // /**
    //  * Validation function to be executed when sublist line is committed.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  *
    //  * @returns {boolean} Return true if sublist line is valid
    //  *
    //  * @since 2015.2
    //  */
    // function validateLine(scriptContext) {

    // }

    // /**
    //  * Validation function to be executed when sublist line is inserted.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  *
    //  * @returns {boolean} Return true if sublist line is valid
    //  *
    //  * @since 2015.2
    //  */
    // function validateInsert(scriptContext) {

    // }

    // /**
    //  * Validation function to be executed when record is deleted.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.sublistId - Sublist name
    //  *
    //  * @returns {boolean} Return true if sublist line is valid
    //  *
    //  * @since 2015.2
    //  */
    // function validateDelete(scriptContext) {

    // }

    // /**
    //  * Validation function to be executed when record is saved.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @returns {boolean} Return true if record is valid
    //  *
    //  * @since 2015.2
    //  */
    // function saveRecord(scriptContext) {

    // }

    return {
       // pageInit: pageInit,
        fieldChanged: fieldChanged,
        // postSourcing: postSourcing,
        // sublistChanged: sublistChanged,
        // lineInit: lineInit,
        // validateField: validateField,
        // validateLine: validateLine,
        // validateInsert: validateInsert,
        // validateDelete: validateDelete,
        // saveRecord: saveRecord
    };
    
});

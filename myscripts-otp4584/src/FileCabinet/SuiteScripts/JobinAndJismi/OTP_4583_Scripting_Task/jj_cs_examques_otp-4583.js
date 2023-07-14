/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/record', 'N/search', 'N/url'],
/**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{search} search
 * @param{serverWidget} serverWidget
 * @param{url} url
 */
function(currentRecord, record, search, url) {
    
    // /**
    //  * Function to be executed after page is initialized.
    //  *
    //  * @param {Object} scriptContext
    //  * @param {Record} scriptContext.currentRecord - Current form record
    //  * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
    //  *
    //  * @since 2015.2
    //  */
    // // function pageInit(scriptContext) {

        
    // // }

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
    // function fieldChanged(scriptContext) {

    // }

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
//     function postSourcing(scriptContext) {

//         let cusFirstname = scriptContext.getValue({
//             fieldId : 'cusfirstname'
//         });
//         let cusLastname = scriptContext.getValue({
//             fieldId : 'cuslastname'
//         });
//         let cusId = scriptContext.id;
//        // log.debug("firstname",cusFirstname);


//        let cusSearch = search.create({
//         type :'customrecordjj_customrecord01',
//         id :'customsearch_jj_customer_search1',
//         column : ['custrecordjj_salesrep'],
//         filters : [['custrecordjj_first_name','is',cusFirstname],'and',['custrecordjj_last_name','is',cusLastname]]
//        });

//        var cussalerep = cusSearch.run();

//        if(salerep){

//        document.location = url.resolveScript({

//         scriptId : 'customscriptjj_sl_custom_record',
//         deploymentId : 'customdeployjj_sl_custom_record',
//         params : 
//         {'cussalerep': cussalerep}

//        });

//     }
       
        


    
// }

//     // /**
//     //  * Function to be executed after sublist is inserted, removed, or edited.
//     //  *
//     //  * @param {Object} scriptContext
//     //  * @param {Record} scriptContext.currentRecord - Current form record
//     //  * @param {string} scriptContext.sublistId - Sublist name
//     //  *
//     //  * @since 2015.2
//     //  */
//     // function sublistChanged(scriptContext) {

//     // }

//     // /**
//     //  * Function to be executed after line is selected.
//     //  *
//     //  * @param {Object} scriptContext
//     //  * @param {Record} scriptContext.currentRecord - Current form record
//     //  * @param {string} scriptContext.sublistId - Sublist name
//     //  *
//     //  * @since 2015.2
//     //  */
//     // function lineInit(scriptContext) {

//     // }

//     // /**
//     //  * Validation function to be executed when field is changed.
//     //  *
//     //  * @param {Object} scriptContext
//     //  * @param {Record} scriptContext.currentRecord - Current form record
//     //  * @param {string} scriptContext.sublistId - Sublist name
//     //  * @param {string} scriptContext.fieldId - Field name
//     //  * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
//     //  * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
//     //  *
//     //  * @returns {boolean} Return true if field is valid
//     //  *
//     //  * @since 2015.2
//     //  */
//     // function validateField(scriptContext) {

//     // }

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
        // fieldChanged: fieldChanged,
        postSourcing: postSourcing,
        // sublistChanged: sublistChanged,
        // lineInit: lineInit,
        // validateField: validateField,
        // validateLine: validateLine,
        // validateInsert: validateInsert,
        // validateDelete: validateDelete,
        // saveRecord: saveRecord
    };
    
});

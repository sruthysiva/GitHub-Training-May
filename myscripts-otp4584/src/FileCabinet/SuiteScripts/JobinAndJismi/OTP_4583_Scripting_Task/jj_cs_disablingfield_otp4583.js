// /**
//  * @NApiVersion 2.x
//  * @NScriptType ClientScript
//  * @NModuleScope SameAccount
//  */
// define(['N/currentRecord', 'N/record'],
// //     /**
// //      * @param{currentRecord} currentRecord
// //      * @param{record} record
// //      */
//     function (currentRecord, record) {

// //         /**
// //          * Function to be executed after page is initialized.
// //          *
// //          * @param {Object} scriptContext
// //          * @param {Record} scriptContext.currentRecord - Current form record
// //          * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
// //          *
// //          * @since 2015.2
// //          */
// //         // function pageInit(scriptContext) {

// //         //     let currentRecord = scriptContext.currentRecord;
// //         //     let fieldValue=currentRecord.getField({
// //         //         fieldId : "url"
// //         //     })
// //         //     fieldValue.isDisabled = true ;
// //         //     console.log("field disabled ");

// //         // }

// //         /**
// //          * Function to be executed when field is changed.
// //          *
// //          * @param {Object} scriptContext
// //          * @param {Record} scriptContext.currentRecord - Current form record
// //          * @param {string} scriptContext.sublistId - Sublist name
// //          * @param {string} scriptContext.fieldId - Field name
// //          * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
// //          * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
// //          *
// //          * @since 2015.2
// //         //  */
// //         // function fieldChanged(scriptContext) {
// //         //     let currentRecord = scriptContext.currentRecord;
// //         //     // let checkVal = currentRecord.getValue({
// //         //     //     fieldId: 'custbodyjj_cs_check01'
// //         //     // });

// //         //     // if (checkVal) {
// //         //     //     currentRecord.setValue({
// //         //     //         fieldId: "custbodyjj_cs_textbox",
// //         //     //         value: "Passed",
// //         //     //         ignoreFieldchange : true
// //         //     //     })
// //         //     // }
// //         //     // else {
// //         //     //     currentRecord.setValue({
// //         //     //         fieldId: "custbodyjj_cs_textbox",
// //         //     //         value: "failed",
// //         //     //         ignoreFieldchange : true
// //         //     //     })
// //         //     // }

// //         // }

// //         // let checkValue = currentRecord.getValue({
// //         //         fieldId : 'custentity_jj_ue_checkbox4583'
// //         //     });
// //         //     let textValue =  currentRecord.getField({
// //         //         fieldId : "custentityjj_textbox_otp4583"
// //         //     });
// //         //     if(checkValue){
// //         //         textValue.isDisabled = false;
// //         //     }
// //         //     else{
// //         //         textValue.isDisabled = true;
// //         //     }

// //         //     console.log("field change occured");

    

// //         // /**
// //         //  * Function to be executed when field is slaved.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  * @param {string} scriptContext.fieldId - Field name
// //         //  *
// //         //  * @since 2015.2
// //         //  */
//         function postSourcing(scriptContext) {

//             let currentRecord = scriptContext.currentRecord;
//             let sublistName = scriptContext.sublistId;
//             let fieldName = scriptContext.fieldId;
//             let lineId = scriptContext.line;

//             if (sublistName === 'item' && fieldName === 'item') {
//                 let amountRate = currentRecord.getCurrentSublistValue({
//                     sublistId: 'item',
//                     fieldId: 'amount',
//                     lineId : lineId
//                 });
//                 currentRecord.setCurrentSublistValue({

//                     sublistId: 'item',
//                     fieldId: 'amount',
//                     value: amountRate * 2,
//                     lineId : lineId
//                 })
//                 currentRecord.commitLine({
//                     sublistId: 'item'
//                 });

//             }
//         }
// //         // }



// //         // /**
// //         //  * Function to be executed after sublist is inserted, removed, or edited.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function sublistChanged(scriptContext) {

// //         // }

// //         // /**
// //         //  * Function to be executed after line is selected.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function lineInit(scriptContext) {

// //         // let currentRecord = scriptContext.currentRecord;
// //         // let sublistName = scriptContext.sublistId;


// //         // if(sublistName === 'item'){

// //         //     currentRecord.setCurrentSublistValue({
// //         //         sublistId: sublistName,
// //         //         fieldId: 'rate',
// //         //         value : 100
// //         //     });
// //         //     currentRecord.commitLine({
// //         //         sublistId: sublistName
// //         //         });
// //         // }
// //         // console.log("Item added successfully");

// //         // }

// //         // /**
// //         //  * Validation function to be executed when field is changed.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  * @param {string} scriptContext.fieldId - Field name
// //         //  * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
// //         //  * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
// //         //  *
// //         //  * @returns {boolean} Return true if field is valid
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function validateField(scriptContext) {

// //         // }

// //         // /**
// //         //  * Validation function to be executed when sublist line is committed.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  *
// //         //  * @returns {boolean} Return true if sublist line is valid
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function validateLine(scriptContext) {

// //         // }

// //         // /**
// //         //  * Validation function to be executed when sublist line is inserted.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  *
// //         //  * @returns {boolean} Return true if sublist line is valid
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function validateInsert(scriptContext) {

// //         // }

// //         // /**
// //         //  * Validation function to be executed when record is deleted.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @param {string} scriptContext.sublistId - Sublist name
// //         //  *
// //         //  * @returns {boolean} Return true if sublist line is valid
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function validateDelete(scriptContext) {

// //         // }

// //         // /**
// //         //  * Validation function to be executed when record is saved.
// //         //  *
// //         //  * @param {Object} scriptContext
// //         //  * @param {Record} scriptContext.currentRecord - Current form record
// //         //  * @returns {boolean} Return true if record is valid
// //         //  *
// //         //  * @since 2015.2
// //         //  */
// //         // function saveRecord(scriptContext) {

// //         // }

//         return {
// // //     //     pageInit: pageInit,
// // //     fieldChanged: fieldChanged,
//  postSourcing: postSourcing,
// // //     // sublistChanged: sublistChanged,
// // //     //  lineInit: lineInit,
// // //     // validateField: validateField,
// // //     // validateLine: validateLine,
// // //     // validateInsert: validateInsert,
// // //     // validateDelete: validateDelete,
// // //     // saveRecord: saveRecord
// };

//    });

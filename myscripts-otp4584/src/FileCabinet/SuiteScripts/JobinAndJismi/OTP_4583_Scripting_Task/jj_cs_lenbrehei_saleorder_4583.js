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
    function (currentRecord, record) {

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
        function postSourcing(scriptContext) {

            let currentRecord = scriptContext.currentRecord;
            let sublistName = scriptContext.sublistId;
            let fieldName = scriptContext.fieldId;

            if (sublistName == 'item' && fieldName == 'item') {

                let itemId = currentRecord.getCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: 'item'
                });
                let itemRec = record.load({
                    type: record.Type.INVENTORY_ITEM,
                    id: itemId,
                    isDynamic: true

                });
                let len = itemRec.getValue({
                    fieldId: 'custitem_jj_length_otp4583'
                });
                let bre = itemRec.getValue({
                    fieldId: 'custitem_jj_breadth_otp4583'
                });
                let hei = itemRec.getValue({
                    fieldId: 'custitem_jj_height_4583'
                });
                currentRecord.setCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: 'custcol_jj_containerbox_4583',
                    value: len * hei * bre
                });
                let rate = currentRecord.getCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: 'rate'

                });
                currentRecord.setCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: 'amount',
                    value: (len * hei * bre) * rate

                })
                currentRecord.commitLine({
                    sublistId: 'item'
                });
                console.log("success");
            }

        }

        /**
         * Function to be executed after sublist is inserted, removed, or edited.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @since 2015.2
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
        function validateLine(scriptContext) {

            let cRecord = scriptContext.currentRecord;

            let sublistName = scriptContext.sublistId;

            if (sublistName === 'item') {

                let amt = cRecord.getCurrentSublistValue({

                    sublistId: 'item',

                    fieldId: 'amount'

                })

                let cont_box = cRecord.getCurrentSublistValue({

                    sublistId: 'item',

                    fieldId: 'custcol_jj_container_box'

                })

                let rate = cRecord.getCurrentSublistValue({

                    sublistId: 'item',

                    fieldId: 'rate'

                })

                if (amt == (rate * cont_box)) {

                    return true

                }

                else {

                    return false

                }

            }


            }

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
            // //  * Validation function to be executed when record is saved.
            // //  *
            // //  * @param {Object} scriptContext
            // //  * @param {Record} scriptContext.currentRecord - Current form record
            // //  * @returns {boolean} Return true if record is valid
            // //  *
            // //  * @since 2015.2
            // //  */
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

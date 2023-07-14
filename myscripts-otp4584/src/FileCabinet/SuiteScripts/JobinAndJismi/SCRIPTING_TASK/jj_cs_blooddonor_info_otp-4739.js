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


        function fieldChanged(scriptContext) {

            let currentRecord = scriptContext.currentRecord;

            //validation of first name field

            if (scriptContext.fieldId === 'donorfirstname') {

                var fName = currentRecord.getValue({
                    fieldId : 'donorfirstname'

                });


                // to check the firstname start with digits..

                if (fName.match(/\d/)) {

                    alert('First Name should contain  alphabets, Please enter a valid name')

                    currentRecord.setValue({
                        fieldId : 'donorfirstname',
                        value : null
                    });

                }

            }

            // validation of Last Donation Date

            if (scriptContext.fieldId === 'lastdonatedate') {

                var donDate = currentRecord.getValue({
                    fieldId : 'lastdonatedate'
                });

                var currentDate = new Date(); //current date 

                var selectedDate = new Date(donDate); //selected date from the field

                if (selectedDate > currentDate) {

                    alert('Future dates are not allowed, enter a valid date');

                    currentRecord.setValue({
                        fieldId : 'lastdonatedate',
                        value : null,
                        isFocus : true
                    });


                }

            }


        }

        return {
            fieldChanged: fieldChanged,

        };

    });

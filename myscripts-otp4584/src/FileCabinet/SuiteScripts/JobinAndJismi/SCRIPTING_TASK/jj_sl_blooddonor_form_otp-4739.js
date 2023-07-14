/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
/*************************************************************************************
**************************************************************************************
 
* 
* ${OTP-4739} : ${Custom form to store blood donor details and track them in database}
*
* 
**************************************************************************************
********
*
* Author: Jobin and Jismi IT Services
*
* Date Created : 12-July-2023
*
* Description : This script is for creation of a custom suitelet form to collect  blood
donor information and store it in a custom record.
*
* REVISION HISTORY
*
* @version 1.0 : 13-July-2023 : Created the initial build by JJ0294
*  
*
*
*************************************************************************************
**********/


define(['N/record', 'N/ui/serverWidget'],
    /**
 * @param{record} record
 * @param{serverWidget} serverWidget
 */
    (record, serverWidget) => {



        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {

            if (scriptContext.request.method === 'GET') {
                

                //creation of suitelet form and fields

                var form = serverWidget.createForm({
                    id: "jj_blood_donor_info_form",
                    title : 'BLOOD DONOR INFORMATION'
                });

                let donorInfo = form.addFieldGroup({
                    id : 'donorinfo',
                    label : 'Donor Information'
                });

                let firstName = form.addField({
                    id : 'donorfirstname',
                    type : serverWidget.FieldType.TEXT,
                    label : 'First Name',
                    container : 'donorinfo',
                   
                });
                            
                let lastName = form.addField({
                    id : 'donorlastname',
                    type : serverWidget.FieldType.TEXT,
                    label : 'Last Name',
                    container : 'donorinfo'
                });

                let phoneNumber = form.addField({
                    id : 'phonenumber',
                    type : serverWidget.FieldType.PHONE,
                    label : 'Phone Number',
                    container : 'donorinfo'
                });

                let genderInfo = form.addField({
                    id : 'gender',
                    type : serverWidget.FieldType.SELECT,
                    label : 'Gender',
                    container : 'donorinfo'
                });

                genderInfo.addSelectOption({
                    value : ' ',
                    text : ' '
                });

                genderInfo.addSelectOption({
                    value : 'Male',
                    text : 'Male'
                });

                genderInfo.addSelectOption({
                    value : 'Female',
                    text : 'Female'
                });

                let bloodGroup = form.addField({
                    id : 'bloodgrp',
                    type : serverWidget.FieldType.SELECT,
                    label : 'Blood Group',
                    container : 'donorinfo'
                });

                bloodGroup.addSelectOption({
                    value : ' ',
                    text : ' '
                });

                bloodGroup.addSelectOption({
                    value : 'A+',
                    text : 'A+'
                });

                bloodGroup.addSelectOption({
                    value : 'A-',
                    text : 'A-'
                });

                bloodGroup.addSelectOption({
                    value : 'AB+',
                    text : 'AB+'
                });

                bloodGroup.addSelectOption({
                    value : 'AB-',
                    text : 'AB-'
                });

                bloodGroup.addSelectOption({
                    value : 'O+',
                    text : 'O+'
                });

                bloodGroup.addSelectOption({
                    value : 'O-',
                    text : 'O-'
                });

                let lastDonationDate = form.addField({
                    id : 'lastdonatedate',
                    type : serverWidget.FieldType.DATE,
                    label : 'Last Donation Date',
                    container : 'donorinfo'
                });


                form.addSubmitButton({
                    label : 'Submit'
                });

                form.addResetButton({
                    label : 'Reset'
                });

               

                scriptContext.response.writePage(form);

                form.clientScriptFileId = 3768;

            }

            else {

                // variables to get data from suitelet form

                let donorFirstName = scriptContext.request.parameters.donorfirstname;
                let donorLastName  = scriptContext.request.parameters.donorlastname;
                let donorPhone     = scriptContext.request.parameters.phonenumber;
                let donorGender    = scriptContext.request.parameters.gender;
                let bloodGroup     = scriptContext.request.parameters.bloodgrp;
                let lastDonation   = scriptContext.request.parameters.lastdonatedate;

                //saving the form content in the custom record type

                let donorObj = record.create({
                    type : 'customrecordjj_blooddonorinfo_otp4739',
                    isDynamic : true
                });

                donorObj.setValue({
                    fieldId : 'custrecordjj_firstname',
                    value : donorFirstName
                });

                donorObj.setValue({
                    fieldId : 'custrecordjj_lastname',
                    value : donorLastName
                });

                donorObj.setValue({
                    fieldId : 'name',
                    value : donorFirstName + ' ' + donorLastName
                });

                donorObj.setValue({
                    fieldId : 'custrecordjj_phoneno_blooddonor',
                    value : donorPhone
                });

                donorObj.setValue({
                    fieldId : 'custrecordjj_gender_blooddonor',
                    value : donorGender
                });

                donorObj.setValue({
                    fieldId : 'custrecordjj_bloodgrp_donor',
                    value : bloodGroup
                });

                donorObj.setValue({
                    fieldId : 'custrecordjj_lastdonation_blooddonor',
                    value : lastDonation
                });

                let donorRec = donorObj.save({
                    ignoreMandatoryFields : true,
                    enableSourcing : true
                });

                //Displaying the entered form values

                scriptContext.response.write('</br><b><h2>*** ---Blood Donor Information--- ***</h2>'
                    + '</br></br> Name : ' + donorFirstName + ' ' + donorLastName
                    + '</br></br> Phone number : ' + donorPhone
                    + '</br></br> Gender : ' + donorGender
                    + '</br></br> Blood Group : ' + bloodGroup
                    + '</br></br> Last Donation Date : ' + lastDonation
                    + '</br></br>*********************************************************************'
                    + '</br></br></br></br>Record has been successfully created with id ' + donorRec
                );

            }

        }

        return { onRequest }

    });

/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/currentRecord', 'N/record', 'N/search', 'N/ui/serverWidget','N/email'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{search} search
 * @param{serverWidget} serverWidget
 */
    (currentRecord, record, search, email, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {

            if (scriptContext.request.method === 'GET') {
                var form = serverWidget.createForm({
                    title: 'CUSTOMER RECORD FORM'
                });
                //scriptContext.response.writePage(form);

                form.clientScriptFileId = 6;

                var cusInformation = form.addFieldGroup({
                    id: 'customerinfo',
                    label: 'Customer Information'
                });
                var firstName = form.addField({
                    id: 'cusfirstname',
                    type: serverWidget.FieldType.TEXT,
                    label: 'First Name',
                    container: 'customerinfo'
                });
                var lastName = form.addField({
                    id: 'cuslastname',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Last Name'
                });

                var cusEmail = form.addField({
                    id: 'cusemail',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Email',
                    container: 'customerinfo'
                });
                var cusSalerep = form.addField({
                    id: 'cussalerep',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Sales Rep',
                    container: 'customerinfo'
                });

                var subjectField = form.addField({
                    id: 'cussub',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Subject',
                    container: 'customerinfo'
                });

                var messageField = form.addField({
                    id: 'cusmessage',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Message',
                    container: 'customerinfo'
                });

                var button = form.addSubmitButton({
                    label: 'Submit'
                });

                scriptContext.response.writePage(form);


            }
            else{

                var custfirstName = scriptContext.request.parameters.cusfirstname;
                var custlastName = scriptContext.request.parameters.cuslastname;  
                var email = scriptContext.request.parameters.cusemail;
                var cusRep = scriptContext.request.parameters.cussalerep;
                var cusSubject = scriptContext.request.parameters.cussub;
                var cusMessage =  scriptContext.request.parameters.cusmessage;
                

                var cusObject = record.create({
                    type : 'customrecordjj_customrecord01',
                    isDynamic : false
                });
                cusObject.setValue({
                    fieldId:'custrecordjj_first_name',
                    value:custfirstName
                });
                cusObject.setValue({
                    fieldId:'custrecordjj_last_name',
                    value:custlastName
                });
                cusObject.setValue({
                    fieldId:'custrecordjj_fullname',
                    value:custfirstName +' '+ custlastName
                });
                cusObject.setValue({
                    fieldId : 'custrecordjj_email',
                    value : email
                });
                cusObject.setText({
                    fieldId : 'custrecordjj_salesrep',
                    value : cusRep
                });
                cusObject.setValue({
                    fieldId : ' custrecordjj_subject',
                    value : cusSubject
                });
                cusObject.setValue({
                    fieldId : 'custrecordjj_message',
                    value : cusMessage
                });
                var cusRecId = cusObject.save({
                    ignoreMandatoryFields : true,
                    enableSourcing : true
                });

               scriptContext.response.write('Record has been created with id '+cusRecId);
                

                email.send({
                    author : -5,
                    recipients: cusRep,
                    subject: "New Record Created",
                    body: "New Record has been created "
                });


            }

        }

        return { onRequest }

    });


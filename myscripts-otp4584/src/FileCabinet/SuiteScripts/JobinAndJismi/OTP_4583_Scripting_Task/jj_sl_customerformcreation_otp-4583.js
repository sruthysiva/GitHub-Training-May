/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/currentRecord', 'N/record', 'N/search', 'N/ui/serverWidget'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{search} search
 * @param{serverWidget} serverWidget
 */
    (currentRecord, record, search, serverWidget) => {
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
                    title: 'CUSTOMER INFORMATION FORM'
                });
                //scriptContext.response.writePage(form);

                var cusInfo = form.addFieldGroup({
                    id: 'customerinfo',
                    label: 'Primary Information'
                });
                var cusName = form.addField({
                    id: 'cusname',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Customer Name',
                    container: 'customerinfo'
                });
                var cusPhone = form.addField({
                    id: 'cusphone',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Phone Number',
                    container: 'customerinfo'
                });
                var cusEmail = form.addField({
                    id: 'cusemail',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Email',
                    container: 'customerinfo'
                });
                var cusSalerep = form.addField({
                    id: 'cussalerep',
                    type: serverWidget.FieldType.SELECT,
                    label: 'Sales Rep',
                    container: 'customerinfo'
                });

                cusSalerep.addSelectOption({
                    value: ' ',
                    text: ' '
                });

                cusSalerep.addSelectOption({
                    value: 'employee 1',
                    text: 'John Doe'
                });
                cusSalerep.addSelectOption({
                    value: 'employee 2',
                    text: 'Jane Smith '
                });
                 
                var cusSubsidiary = form.addField({
                    id : 'cussub',
                    type :serverWidget.FieldType.SELECT,
                    label: 'Subsidiary',
                    container : 'customerinfo'
                });

                var mySubsidiary = search.create({
                    type : search.Type.SUBSIDIARY,
                    id : 'customsearch_jj_subsidiary_01',
                    title : 'JJ SL SUBSIDIARY SEARCH',
                    columns : ['name']
                });
                var results1 = mySubsidiary.run().getRange({
                    start : 0,
                    end : 30
                });
                for(let i=0;i<results1.length;i++){
                    var sub1 = results1[i].getValue({
                        name : 'name'
                    });
                
                cusSubsidiary.addSelectOption({
                    value : sub1,
                    text : sub1
                });
                }

                var button = form.addSubmitButton({
                    label : 'Submit'
                });

                scriptContext.response.writePage(form);


            }
            else{
                var custName = scriptContext.request.parameters.cusname;
                var cusPhn = scriptContext.request.parameters.cusphone;
                var email = scriptContext.request.parameters.cusemail;
                var cusSub = scriptContext.request.parameters.cussub;
                var cusRep = scriptContext.request.parameters.cussalerep;


                scriptContext.response.write('</br><b><h2>***Customer Details***</h2>'
                +'</br></br> Name : '+custName
                +'</br></br> Phone number : '+cusPhn
                +'</br></br> Email : '+email
                +'</br></br> Sales Rep : '+cusRep
                +'</br></br> Subsidiary : '+cusSub
                
                );

                var cusObject = record.create({
                    type : record.Type.CUSTOMER,
                    isDynamic : true
                });
                cusObject.setValue('companyname',custName);
                cusObject.setText('subsidiary',cusSub);
              
                cusObject.setValue({
                    fieldId : 'phone',
                    value : cusPhn
                });
                cusObject.setValue({
                    fieldId : 'email',
                    value : email
                });
                cusObject.setText({
                    fieldId : 'salesrep',
                    value : cusRep
                });
                var cusId = cusObject.save({
                    ignoreMandatoryFields : true,
                    enableSourcing : true
                });

               scriptContext.response.write('</br></br> Record has been created with id '+cusId)
          

            }

        }

        return { onRequest }

    });

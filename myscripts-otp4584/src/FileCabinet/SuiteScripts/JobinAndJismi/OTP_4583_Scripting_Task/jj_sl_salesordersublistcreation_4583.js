/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/currentRecord', 'N/record', 'N/ui/serverWidget','N/search'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{serverWidget} serverWidget
 */
    (currentRecord, record, serverWidget,search) => {
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
                    title: 'SALES ORDER SEARCH'
                });

                
                var subTab1 = form.addSubtab({
                    id: 'jj_subtab01',
                    label: "SALES ORDER INFORMATION"
                });
                var subList1 = form.addSublist({
                    id: 'jj_sublist1',
                    label: 'Sales Details',
                    type: serverWidget.SublistType.INLINEEDITOR,
                    subTab: 'jj_subtab01'
                });
                var docField = subList1.addField({
                    id: 'jj_docnumber',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Document Number'
                });
                var cusField = subList1.addField({
                    id: 'jj_customername',
                    type: serverWidget.FieldType.TEXT,
                    label: "Customer Name"
                });
                var subsid = subList1.addField({
                    id: 'jj_subsidiary',
                    type: serverWidget.FieldType.TEXT,
                    label: "Subsidiary"
                });
                var dateCreated = subList1.addField({
                    id: 'jj_date',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Date'
                });


                var mySalesSearch = search.create({
                    type : search.Type.SALES_ORDER,
                    id : 'customsearch_jj_salesearch_01',
                    title : 'JJ SL SALESORDER SEARCH',
                    columns : ['entity','tranid','subsidiary','trandate'],
                    filters : ['mainline','is',true]
                });
                var results1 = mySalesSearch.run().getRange({
                    start : 0,
                    end : 50
                });

                for(let i=0;i<results1.length;i++){

                    var companyName = results1[i].getText({
                        name : 'entity'
                    });
                    var docNum = results1[i].getValue({
                        name : 'tranid'
                    });
                     
                    var cusSub = results1[i].getText({
                        name : 'subsidiary'
                    });

                    var dateCreate = results1[i].getValue({
                        name : 'trandate'
                    });

                    subList1.setSublistValue({
                        id : 'jj_customername',
                        line : i,
                        value : companyName
                    });
                    subList1.setSublistValue({
                        id : 'jj_docnumber',
                        line : i,
                        value : docNum
                    });
                    subList1.setSublistValue({
                        id : 'jj_subsidiary',
                        line : i,
                        value : cusSub
                    });
                    subList1.setSublistValue({
                        id : 'jj_date',
                        line : i,
                        value : dateCreate
                    });

                }

                scriptContext.response.writePage(form);


            }
        }
        return { onRequest }

    });

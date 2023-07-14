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

                // create a form using serverWidget

                let form = serverWidget.createForm({
                    id: "jj_custom_sales_order_form",
                    title: "CUSTOM SALES ORDER FORM"
                });

                form.clientScriptFileId = 9;

                var subSearch = search.create({
                    type: search.Type.SUBSIDIARY,
                    id: 'customsearch_jj_subsidiary',
                    title: 'JJ SUBSIDIARY SEARCH',
                    columns: ['name']
                });
                var subFilter = form.addField({
                    id: 'sub_filter',
                    type: serverWidget.FieldType.SELECT,
                    label: 'SUBSIDIARY'
                });
                subFilter.addSelectOption({
                    value: ' ',
                    text: ' '
                });
                subFilter.addSelectOption({
                    value: 'all',
                    text: '-ALL-'
                });
                subSearch.run().each(function (result) {
                    var subName = result.getValue({
                        name: 'name'
                    });
                    subFilter.addSelectOption({
                        value: result.id,
                        text: subName
                    });
                    return true;
                });

                subFilter.defaultValue = scriptContext.request.parameters.z3;

                var statusFilter = form.addField({
                    id: 'status_filter',
                    type: serverWidget.FieldType.SELECT,
                    label: 'STATUS'
                });
                statusFilter.addSelectOption({
                    value: ' ',
                    text: ' '
                });

                statusFilter.addSelectOption({
                    value: 'all',
                    text: '-ALL-'
                });
                statusFilter.addSelectOption({
                    value: 'SalesOrd:B',
                    text: 'pendingFulfillment'
                });
                statusFilter.addSelectOption({
                    value: 'SalesOrd:D',
                    text: 'partiallyFulfilled'
                });
                statusFilter.addSelectOption({
                    value: 'SalesOrd:E',
                    text: 'pendingBilling/partiallyFulfilled'
                });
                statusFilter.addSelectOption({
                    value: 'SalesOrd:F',
                    text: 'pendingBilling'
                });

                statusFilter.defaultValue = scriptContext.request.parameters.z2;
                var cusSearch = search.create({
                    type: search.Type.CUSTOMER,
                    id: 'customsearch_jj_customer_search',
                    title: 'JJ CUSTOMER SEARCH',
                    columns: ['companyname'],
                });
                var cusFilter = form.addField({
                    id: 'cus_filter',
                    type: serverWidget.FieldType.SELECT,
                    label: 'CUSTOMER'
                });
                cusFilter.addSelectOption({
                    value: ' ',
                    text: ' '
                });
                cusFilter.addSelectOption({
                    value: 'all',
                    text: '-ALL-'
                });
                cusSearch.run().each(function (result) {
                    var cusName = result.getValue({
                        name: 'companyname'
                    });
                    cusFilter.addSelectOption({
                        value: result.id,
                        text: cusName
                    });
                    return true;
                });

                cusFilter.defaultValue = scriptContext.request.parameters.z1;

                var deptSearch = search.create({
                    type: search.Type.DEPARTMENT,
                    id: 'customsearch_jj_department_search',
                    title: 'JJ DEPARTMENT SEARCH',
                    columns: ['name'],
                });
                var deptFilter = form.addField({
                    id: 'dept_filter',
                    type: serverWidget.FieldType.SELECT,
                    label: 'DEPARTMENT'
                });
                deptFilter.addSelectOption({
                    value: ' ',
                    text: ' '
                });
                deptFilter.addSelectOption({
                    value: 'all',
                    text: '-ALL-'
                });
                deptSearch.run().each(function (result) {
                    var deptName = result.getValue({
                        name: 'name'
                    });
                    deptFilter.addSelectOption({
                        value: result.id,
                        text: deptName
                    });
                    return true;
                });

                deptFilter.defaultValue = scriptContext.request.parameters.z4;



                let subtab = form.addSubtab({
                    id: "jj_subtab_sales_order",
                    label: "Primary Details"
                });

                let sublist = form.addSublist({
                    id: "jj_sublist_sales_order",
                    label: "Sales Details",
                    type: serverWidget.SublistType.LIST,
                    subtab: "jj_subtab_sales_order"

                });
                let internalId = sublist.addField({
                    id: "jj_internal_id",
                    type: serverWidget.FieldType.TEXT,
                    label: "Internal ID"
                });
                let docName = sublist.addField({
                    id: "jj_document_name",
                    type: serverWidget.FieldType.TEXT,
                    label: "Document Name"
                });
                let date = sublist.addField({
                    id: "jj_date",
                    type: serverWidget.FieldType.TEXT,
                    label: "Date"
                });
                let status = sublist.addField({
                    id: "jj_status",
                    type: serverWidget.FieldType.TEXT,
                    label: "Status"
                });
                let cusName = sublist.addField({
                    id: "jj_customer_name",
                    type: serverWidget.FieldType.TEXT,
                    label: "Customer Name"
                });
                let subName = sublist.addField({
                    id: "jj_subsidiary_name",
                    type: serverWidget.FieldType.TEXT,
                    label: "Subsidiary"
                });
                let deptName = sublist.addField({
                    id: "jj_department_name",
                    type: serverWidget.FieldType.TEXT,
                    label: "Department"
                });
                let className = sublist.addField({
                    id: "jj_class",
                    type: serverWidget.FieldType.TEXT,
                    label: "Class"
                });
                let lineNum = sublist.addField({
                    id: "jj_line_number",
                    type: serverWidget.FieldType.TEXT,
                    label: "Line Number"
                });
                let subTotal = sublist.addField({
                    id: "jj_sub_total",
                    type: serverWidget.FieldType.TEXT,
                    label: "Sub Total"
                });
                let tax = sublist.addField({
                    id: "jj_tax",
                    type: serverWidget.FieldType.TEXT,
                    label: "Tax"
                });
                let total = sublist.addField({
                    id: "jj_total",
                    type: serverWidget.FieldType.TEXT,
                    label: "Total"
                });

                let salesSearch = search.create({
                    type: search.Type.SALES_ORDER,
                    id: "customsearch_jj_sales_search",
                    title: "sales search",
                    columns: ['internalid', 'department', 'class', 'total', 'tranid', 'trandate', 'status', 'subsidiary', 'line', 'entity', 'taxtotal'],
                    // filters:[['taxline', 'is', 'false'], 'and',['mainline','is','false'], 'and',['status','anyof',['SalesOrd:B','SalesOrd:D','SalesOrd:E','SalesOrd:F']]]
                });


                var filters = salesSearch.filters;

                var taxLine = search.createFilter({
                    name: 'taxline',
                    operator: search.Operator.IS,
                    values: 'false'
                });

                filters.push(taxLine)

                var mainLine = search.createFilter({
                    name: 'mainline',
                    operator: search.Operator.IS,
                    values: 'false'
                });

                filters.push(mainLine)

                var statusField = search.createFilter({
                    name: 'status',
                    operator: search.Operator.IS,
                    values: ['SalesOrd:B', 'SalesOrd:D', 'SalesOrd:E', 'SalesOrd:F']
                });

                filters.push(statusField)



                // var submit = form.addSubmitButton({
                //     id: 'submit',
                //     label: 'Submit'
                // })

                // log.debug(salesSearch);

                let custId = scriptContext.request.parameters.z1;

                if (custId) {
                    if (custId == 'all') {
                        //pass
                    }
                    else {
                        var cFilter = search.createFilter({
                            name: 'entity',
                            operator: search.Operator.IS,
                            values: custId
                        });

                        filters.push(cFilter)

                    }

                }

                let statValue = scriptContext.request.parameters.z2;


                if (statValue) {
                    if (statValue == 'all') {
                        //pass
                    }
                    else {
                        var sFilter = search.createFilter({
                            name: 'status',
                            operator: search.Operator.IS,
                            values: statValue
                        });

                        filters.push(sFilter)
                    }

                }

                let subValue = scriptContext.request.parameters.z3;


                if (subValue) {
                    if (subValue == 'all') {
                        //pass
                    }
                    else {
                        let subFilter = search.createFilter({
                            name: 'subsidiary',
                            operator: search.Operator.IS,
                            values: subValue
                        });

                        filters.push(subFilter)
                    }

                }

                let depValue = scriptContext.request.parameters.z4;


                if (depValue) {
                    if (depValue == 'all') {
                        //pass
                    }
                    else {
                        let dFilter = search.createFilter({
                            name: 'department',
                            operator: search.Operator.IS,
                            values: depValue
                        });

                        filters.push(dFilter)
                    }

                }


                let i = 0
                salesSearch.run().each(function (result) {
                    let internalId = result.getValue({
                        name: "internalid"
                    });
                    let docName = result.getValue({
                        name: "tranid"
                    });
                    let date = result.getValue({
                        name: "trandate"
                    });
                    let status = result.getValue({
                        name: "status"
                    });
                    let cusName = result.getText({
                        name: "entity"
                    });
                    let subName = result.getText({
                        name: "subsidiary"
                    });
                    let deptName = result.getText({
                        name: "department"
                    });
                    let className = result.getText({
                        name: "class"
                    });
                    let lineNum = result.getValue({
                        name: "line"
                    });

                 
                    let tax = result.getValue({
                        name: "taxtotal"
                    });
                    let total1 = result.getValue({
                        name: "total"
                    });
                    sublist.setSublistValue({
                        id: 'jj_internal_id',
                        line: i,
                        value: internalId
                    });
                    sublist.setSublistValue({
                        id: 'jj_document_name',
                        line: i,
                        value: docName
                    });
                    sublist.setSublistValue({
                        id: 'jj_date',
                        line: i,
                        value: date
                    });
                    sublist.setSublistValue({
                        id: 'jj_status',
                        line: i,
                        value: status
                    });

                    if (cusName) {
                        sublist.setSublistValue({
                            id: 'jj_customer_name',
                            line: i,
                            value: cusName
                        });
                    }
                    else {
                        sublist.setSublistValue({
                            id: 'jj_customer_name',
                            line: i,
                            value: ' '
                        });
                    }

                    sublist.setSublistValue({
                        id: 'jj_subsidiary_name',
                        line: i,
                        value: subName
                    });

                    if (deptName) {
                        sublist.setSublistValue({
                            id: 'jj_department_name',
                            line: i,
                            value: deptName
                        });

                    }
                    else {
                        sublist.setSublistValue({
                            id: 'jj_department_name',
                            line: i,
                            value: ' '
                        });

                    }


                    if (className) {
                        sublist.setSublistValue({
                            id: 'jj_class',
                            line: i,
                            value: className
                        });

                    }
                    else {
                        sublist.setSublistValue({
                            id: 'jj_class',
                            line: i,
                            value: ' '
                        });
                    }


                    sublist.setSublistValue({
                        id: 'jj_line_number',
                        line: i,
                        value: lineNum
                    });

                    if (tax) {
                        sublist.setSublistValue({
                            id: 'jj_tax',
                            line: i,
                            value: tax
                        });

                    }
                    else {
                        sublist.setSublistValue({
                            id: 'jj_tax',
                            line: i,
                            value: ' '
                        });
                    }

                    sublist.setSublistValue({
                        id: 'jj_total',
                        line: i,
                        value: total1
                    });
                    i++
                    return true
                })


                scriptContext.response.writePage(form); // to display the data

            }

    
        }

        return { onRequest }

    });







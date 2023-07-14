/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/currentRecord', 'N/record', 'N/search'],
    /**
 * @param{currentRecord} currentRecord
 * @param{record} record
 * @param{search} search
 */
    (currentRecord, record, search) => {
        /**
         * Defines the function that is executed when a GET request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const get = (requestParams) => {

            let cusId = requestParams.id;
            let cusObj = record.load({
                type : record.Type.CUSTOMER,
                id : cusId,
                isDynamic : true
            });
            let cusName = cusObj.getValue({
                fieldId : 'companyname'
            });
            let subName = cusObj.getText({
                fieldId : 'subsidiary'
            });
            let saleRep = cusObj.getText({
                fieldId : 'salesrep'
            });
            let email =cusObj.getValue({
                fieldId : 'email'
            });
            return({
                "Customer name  " : cusName,
                "Subsidiary " : subName,
                "SalesRep " : saleRep,
                "Email  ": email

            });


        }

        /**
         * Defines the function that is executed when a PUT request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body are passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const put = (requestBody) => {

            let msg = requestBody.msg;
            let cusId = requestBody.id;
            var cusObj1 = record.load({
                type : record.Type.CUSTOMER,
                id : cusId,
                isDynamic : true
            });
            
            cusObj1.setValue({
                fieldId : 'custentityjj_textbox_otp4583',
                value : msg
            });
            cusObj1.save({
                igoreMandatoryFields : true,
                enableFieldSourcing : true

            })
            return " record updated successfully"





        }

        /**
         * Defines the function that is executed when a POST request is sent to a RESTlet.
         * @param {string | Object} requestBody - The HTTP request body; request body is passed as a string when request
         *     Content-Type is 'text/plain' or parsed into an Object when request Content-Type is 'application/json' (in which case
         *     the body must be a valid JSON)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const post = (requestBody) => {

            let supplierId = requestBody.supplier;
            var itemId = requestBody.item;
            let quantity = requestBody.quantity;
            
            var purchaseObj = record.create({
                type : record.Type.PURCHASE_ORDER,
                isDynamic : true
            });
            purchaseObj.setValue({
                fieldId : 'entity',
                value : supplierId
            });
            purchaseObj.selectNewLine({
                sublistId : 'item'
            });
            purchaseObj.setCurrentSublistValue({
                sublistId :'item',
                fieldId : 'item',
                value : itemId
            });
            purchaseObj.setCurrentSublistValue({
                sublistId :'item',
                fieldId : 'quantity',
                value : quantity
                
            });
            purchaseObj.commitLine({
                sublistId : 'item'
            });

           let purId= purchaseObj.save({
                igoreMandatoryFields : true,
                enableFieldSourcing : true
            });

        return " record has been created success fully"+purId   //1926
        
        }

        /**
         * Defines the function that is executed when a DELETE request is sent to a RESTlet.
         * @param {Object} requestParams - Parameters from HTTP request URL; parameters are passed as an Object (for all supported
         *     content types)
         * @returns {string | Object} HTTP response body; returns a string when request Content-Type is 'text/plain'; returns an
         *     Object when request Content-Type is 'application/json' or 'application/xml'
         * @since 2015.2
         */
        const doDelete = (requestParams) => {

            let venId = requestParams.id

            let venObj = record.delete({
                id : venId,
                type : record.Type.VENDOR
            });
            return " record has been deleted"

        }

        return {get, put, post, delete: doDelete}

    });

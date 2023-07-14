/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record'],
    
    (record) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {

        //     //Creation of a record

        //    var cusObject=record.create({
        //     type : record.Type.CUSTOMER,
        //     isDynamic : true,
        //    });
        //    cusObject.setValue({
        //     fieldId : "companyname",
        //     value : 'Qualhectacommxg-electronics'6+99
        //    });
        //    cusObject.setValue({
        //     fieldId : "subsidiary",
        //     value : 2
        //    });
        //    let cusId = cusObject.save({
        //     enableSourcing : true,
        //     ignoreMandatoryFields : true
        //    });

        //    log.debug("Customer has been created , ID",cusId);

        // //Loading the value

            var cusObject1=record.load({
                type : record.Type.CUSTOMER,
                id:53,
                isDynamic : true

            });

            let cusName=cusObject1.getValue({

            fieldId:'companyname'

            });

            let cusSubsidiary=cusObject1.getValue({

            fieldId :'subsidiary'

            });

            log.debug("Customer name with subsidiary ",cusName,cusSubsidiary);

        


        //deletion of the record

        var cusObject1=record.delete({
                    type : record.Type.CUSTOMER,
                     id : 115
                    
                });

            log.debug("Customer has been deleted");           
            }        

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    }
    );

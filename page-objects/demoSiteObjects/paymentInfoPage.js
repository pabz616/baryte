module.exports ={
    elements:{
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        billing_info:{selector:'(//div[contains(@class,"infoBoxContents")])[1]', locateStrategy:'xpath'},
        payment_method_cod:{selector:'//input[@value="cod"]', locateStrategy:'xpath'},
        payment_method_payPal:{selector:'//input[@value="paypal_express"]', locateStrategy:'xpath'},
        continue_CTA:{selector:'button[id="tdb6"]'}
    },
    commands:[{
        confirmBillingAddress(){
            return this
            .waitForElementVisible('@pageHeader')
            .verify.visible('@billing_info')
        },

        selectPaymentOption(){
            return this
            .click('@payment_method_cod')
        },

        proceedToOrderConfirmation(){
            return this
            .click('@continue_CTA')
        }

    }]
}
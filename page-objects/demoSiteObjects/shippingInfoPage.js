module.exports = {
    elements:{
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        shipping_address_info:{selector:'(//div[contains(@class,"infoBoxContents")])[1]', locateStrategy: 'xpath'},
        shipping_method_info:{selector:'(//tr)[1]', locateStrategy:'xpath'},
        shipping_method_option:{selector:'(//tr[@id="defaultSelected"]/td)[1]', locateStrategy:'xpath'},
        shipping_method_cost:{selector:'(//tr[@id="defaultSelected"]/td)[2]', locateStrategy:'xpath'},
        continue_CTA:{selector: 'button[id="tdb6"]'}

    },
    commands:[{
        confirmShippingAddress(){
            return this
            .waitForElementVisible('@pageHeader')
            .verify.visible('@shipping_address_info')
        },
        confirmShippingMethod(){
            return this

            .verify.visible('@shipping_method_info')
            .verify.visible('@shipping_method_option')
            .verify.visible('@shipping_method_cost')
            //
            .verify.containsText('@shipping_method_info', 'Flat Rate')
            .verify.containsText('@shipping_method_option', 'Best Way')
        },

        continueToPaymentInfo(){
            return this
            .click('@continue_CTA')
        }
    }]
}
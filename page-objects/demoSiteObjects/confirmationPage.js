module.exports = {
    elements:{
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        delivery_address:{selector:'(//tr)[3]', locateStrategy: 'xpath'},
        shipping_method:{selector:'(//tr)[5]', locateStrategy: 'xpath'},
        product_ordered:{selector:'(//tr)[7]', locateStrategy: 'xpath'},
        billing_address:{selector:'(//tr)[10]', locateStrategy: 'xpath'},
        payment_method:{selector:'(//tr)[12]', locateStrategy: 'xpath'},
        order_subtotal:{selector:'(//tr)[13]', locateStrategy: 'xpath'},
        order_delivery:{selector:'(//tr)[14]', locateStrategy: 'xpath'},
        order_total:{selector:'(//tr)[14]', locateStrategy: 'xpath'},
        confirm_order_CTA:{selector:'button[id="tdb5"]'}


    },
    commands:[{
        verifyOrderInformation(){
            return this
            .waitForElementVisible('@pageHeader')
            .verify.visible('@delivery_address')
            .verify.visible('@shipping_method')
            .verify.visible('@product_ordered')
            .verify.visible('@billing_address')
            .verify.visible('@payment_method')
            .verify.visible('@order_subtotal')
            .verify.visible('@order_delivery')
            .verify.visible('@order_total')
        },

        submitOrder(){
            return this
            .click('@confirm_order_CTA')
        }
    }]
}
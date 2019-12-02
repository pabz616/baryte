module.exports = {
    elements:{
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        product_notification:{selector:'//p[@class="productsNotifications"]', locateStrategy:'xpath'},
        get_order_updates:{selector:'//input[@value="16"]', locateStrategy:'xpath'},
        continue_CTA:{selector:'button[id="tdb5"]'}    

    },
    commands:[{
        completeOrder(){
            return this
            .waitForElementVisible('@pageHeader')
            .verify.visible('@product_notification')
            .verify.containsText('@product_notification', 'Courage Under Fire')
            .click('@get_order_updates')
            .click('@continue_CTA')
        }
    }]
}
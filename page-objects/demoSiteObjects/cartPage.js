module.exports = {
    elements:{
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        product_image:{selector:'//img[contains(@title,"Courage Under Fire")]', locateStrategy: 'xpath'},
        product_title:{selector:'//td/a/strong', locateStrategy: 'xpath'},
        product_price:{selector:'//p/strong', locateStrategy: 'xpath'},
        checkout_CTA:{selector:'a[id="tdb5"]'}
    },
    commands:[{
        proceedToCheckout(){
            return this
            .waitForElementVisible('@pageHeader')
            .verify.visible('@product_image')
            .verify.visible('@product_title')
            .verify.visible('@product_price')
            .verify.containsText('@product_price', '$29.99')
            .click('@checkout_CTA')
        }
    }]
}
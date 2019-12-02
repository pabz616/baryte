module.exports = {
    elements: {
        video2_title:{selector:'//h1[contains(.,"Courage")]', locateStrategy: 'xpath'},
        old_price:{selector:'(//h1/del)', locateStrategy: 'xpath'},
        new_price:{selector:'//span[@class="productSpecialPrice"]', locateStrategy: 'xpath'},
        add_to_cart_CTA:{selector:'button[id="tdb4"]'}
},
    commands: [{
        addToCart(){
            return this
            .waitForElementVisible('@video2_title')
            .verify.visible('@video2_title')
            .verify.containsText('@video2_title', 'Courage Under Fire')
            .assert.visible('@new_price')
            .click('@add_to_cart_CTA')
        }
    }]
}
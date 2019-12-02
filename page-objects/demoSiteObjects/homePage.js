module.exports = {
    url: 'http://www.5elementslearning.com/demosite/',
    elements: {
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        video2:{selector:'(//td)[2]', locateStrategy: 'xpath'},
        logoff:{selector:'a[id="tdb4"]'}
},
    commands: [{
        selectProduct(){
            return this
            .waitForElementVisible('@pageHeader')
            .verify.containsText('@pageHeader', 'Welcome to Tattvamassi')
            .click('@video2')
        },

        logOff(){
            return this
            .click('@logoff')
        }
    
    }]
}
module.exports = {
    url: 'https://news.ycombinator.com/newest',
    elements: {
        pageHeader:{selector:'.hnname'}
},
    commands: [{
        checkPageHeader(){
            return this
            .waitForElementVisible('@pageHeader')
            .assert.containsText('@pageHeader', 'Hacker News')
        }
    }]
}
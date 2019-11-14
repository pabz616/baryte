module.exports = {
    "My first test case" (browser){
        browser
            .url('https://news.ycombinator.com/newest')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', 'Hacker News')
    }
}
module.exports = {
    "My first test case" (browser){
        const onWebPage = browser.page.firstObject()

        onWebPage
            .navigate()
            .checkPageHeader()
            .end()
    }
}
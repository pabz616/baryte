module.exports = {
    "My first test case" (browser){
        const onHomePage = browser.page.demoSiteObjects.homePage()
        const onProductDetailsPage = browser.page.demoSiteObjects.productDetailsPage()
        const onCartPage = browser.page.demoSiteObjects.cartPage()
        const onLoginPage = browser.page.demoSiteObjects.loginPage()
        const onShippingInfoPage = browser.page.demoSiteObjects.shippingInfoPage()
        const onPaymentInfoPage = browser.page.demoSiteObjects.paymentInfoPage()
        const onOrderConfirmationPage = browser.page.demoSiteObjects.confirmationPage()
        const onSuccessPage = browser.page.demoSiteObjects.successPage()

        onHomePage
            .navigate()
            .selectProduct()

        onProductDetailsPage
            .addToCart()

        onCartPage
            .proceedToCheckout()

        onLoginPage
            .proceedAsReturnCustomer()


        onShippingInfoPage
            .confirmShippingAddress()
            .confirmShippingMethod()
            .continueToPaymentInfo()

        onPaymentInfoPage
            .confirmBillingAddress()
            .selectPaymentOption()
            .proceedToOrderConfirmation()

        onOrderConfirmationPage
            .verifyOrderInformation()
            .submitOrder()

        onSuccessPage
            .completeOrder()

        onHomePage
            .logOff()

            .end()
    }
}
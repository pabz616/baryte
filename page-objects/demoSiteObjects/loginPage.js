module.exports = {
    elements:{
        pageHeader:{selector:'(//h1)', locateStrategy: 'xpath'},
        usn_input:{selector: 'input[name="email_address"]'},
        pwd_input:{selector: 'input[name="password"]'},
        login_CTA:{selector: 'button[id="tdb5"]'}
    },
    commands:[{
        proceedAsReturnCustomer(){
            let cust_email = 'testerA@domain.com'
            let cust_pwd = 'password1'

            return this
            .waitForElementVisible('@pageHeader')
            .setValue('@usn_input', cust_email)
            .setValue('@pwd_input', cust_pwd)
            .click('@login_CTA')
        }
    }]
}
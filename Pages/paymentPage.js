const { Console, assert } = require('console');


const {I,commonPage} = inject();
module.exports = {
    buttons : {
        btnCart : {xpath : "//span[@class='item-count']"},
        btnPayNow : {xpath :'//*[@id="root"]/div/div[2]/button/span'},
        btnPymntInfo : {xpath : '//*[@id="submitButton"]/span/span'},  
    },
    Fields : {
        fldPriceOnScreen : {xpath : "//div[@class='total']/span"},
        fldEmail : { xpath : '//*[@id="email"]'},
        fldName : { id : 'shipping-name'},
        fldAddress: { id : 'shipping-street'},
        fldZip: { id : 'shipping-zip'},
        fldCity: { id : 'shipping-city'},
        fldCountry: { xpath : '(//div[@class="addressCountrySelectInput selectInput input bottom"])[1]'},
        fldCardNumber : { id : 'card_number'},
        fldDate: { id : 'cc-exp'},
        fldCVV: { id : 'cc-csc'},
        fldTotal : {xpath : '//div[@class="title"]/h2'},
        
    },


    async payNow(Email,Name,Address,Zip,City,CardNumber,DateValue,CVVval)
    {
        var totalFullString = await I.grabTextFrom(this.Fields.fldPriceOnScreen);
        var totalDisplayed = totalFullString.slice(9,12);

        I.waitForVisible(this.buttons.btnPayNow,10);
        I.click(this.buttons.btnPayNow);
        I.wait(5);
        I.switchTo('iframe')
        I.waitForVisible(this.Fields.fldEmail,10);
        I.fillField(this.Fields.fldEmail,Email);
        I.waitForVisible(this.Fields.fldName,10);
        I.fillField(this.Fields.fldName,Name);
        I.waitForVisible(this.Fields.fldAddress,10);
        I.fillField(this.Fields.fldAddress,Address);
        I.waitForVisible(this.Fields.fldZip,10);
        I.fillField(this.Fields.fldZip,Zip);
        I.waitForVisible(this.Fields.fldCity,10);
        I.fillField(this.Fields.fldCity,City);
        I.waitForVisible(this.Fields.fldCountry,10);
        I.click(this.Fields.fldCountry);
        I.type('India');
        I.pressKey('Enter');
        I.waitForVisible(this.buttons.btnPymntInfo,5);
        I.click(this.buttons.btnPymntInfo);

        I.waitForVisible(this.Fields.fldCardNumber,10);
      
        I.click(this.Fields.fldCardNumber);
        I.wait(4);
        I.type(CardNumber,1000)

        I.wait(4);
        I.waitForVisible(this.Fields.fldDate,10);
        I.click(this.Fields.fldDate);
        I.type(DateValue,1000);
        I.wait(2);

        I.waitForVisible(this.Fields.fldCVV,10);
        I.wait(2);
        I.fillField(this.Fields.fldCVV,CVVval);

        var totalFullStringcheckout =  await I.grabTextFrom(this.Fields.fldTotal);
        totalCheckout = totalFullStringcheckout.slice(15);
        if(totalCheckout == totalDisplayed ){
            I.say("Total amount" +totalDisplayed+"is displayed correctly on payment info screen" )
        }
        I.waitForVisible(this.buttons.btnPymntInfo ,5);
        I.click(this.buttons.btnPymntInfo);
        I.wait(7);
        I.acceptPopup();

    }
}

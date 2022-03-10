const { Console, assert } = require('console');


const {I,commonPage} = inject();
module.exports = {
    buttons :{
        btnCart : {xpath : "//span[@class='item-count']"},
        btnMoveToCheckout : {xpath : "//button[contains(text(),'GO TO CHECKOUT')]"}
    },
    text:{
        txtPriceList : {xpath : "//span[@class='price']"},
        txtPticeOnScreen : {xpath : "//div[@class='total']/span"},
        txtItemAmount : {xpath : "//div/span[contains(text(),'')]/parent::div/span[2]/span"}
    },

    async moveToCheckout(){
        I.waitForVisible(this.buttons.btnCart,10);
        I.click(this.buttons.btnCart);
        I.waitForVisible(this.buttons.btnMoveToCheckout,10);
        I.click(this.buttons.btnMoveToCheckout);

    },
    async checkTotal(){
            var priceList = await I.grabTextFromAll(this.text.txtPriceList);
            var itemCount = await I.grabTextFromAll(this.text.txtItemAmount)
            var count = 0;
            for ( var i =0 ; i<priceList.length ; i++ ){
                count = count + ( parseInt(priceList[i]) * parseInt(itemCount[i]) );
            }
            I.say(count);
            var totalFullString = await I.grabTextFrom(this.text.txtPticeOnScreen);
            var totalDisplayed = totalFullString.slice(9,12);
            I.say(totalDisplayed);
            if (count == totalDisplayed){
                I.say('total of items - '+count+'is matching the item total in applicationS' )
            }



    },

    async increaseProducts(pdtName,count){
         I.waitForVisible({xpath: "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[2]/div[2]"},10);
         for (var i=0 ; i<count ; i++){
         I.click({xpath: "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[2]/div[2]"});
         }

    },
    async decreaseProducts(pdtName,count){
        I.waitForVisible({xpath: "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[2]/div[1]"},10);
        for (var i=0 ; i<count ; i++){
            I.click({xpath: "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[2]/div[1]"});
        }
       
    },
    async removeProducts(pdtName){
        I.waitForVisible({xpath : "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[4]"},10);
        I.click({xpath : "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[4]"});
        I.dontSee({xpath : "//span[contains(text(),'"+pdtName+"')]/parent::div"})
        
    }
    
    
    
}

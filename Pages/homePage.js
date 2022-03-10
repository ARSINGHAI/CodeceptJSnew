const { Console, assert } = require('console');


const {I,commonPage} = inject();
module.exports = {
    buttons :{
        btnCart : {xpath : "//span[@class='item-count']"}
    },

    async addToCartandVerify(pdtName)
    {
        I.waitForVisible({xpath : "//div/span[contains(text(),'"+pdtName+"')]"},10)
        I.scrollTo({xpath : "//div/span[contains(text(),'"+pdtName+"')]"})
        I.moveCursorTo({xpath : "//div/span[contains(text(),'"+pdtName+"')]"})
        I.waitForVisible({xpath : "//div/span[contains(text(),'"+pdtName+"')]/parent::div/following-sibling::button"},10)
        I.click({xpath : "//div/span[contains(text(),'"+pdtName+"')]/parent::div/following-sibling::button"});
        var Itemprice = await  I.grabTextFrom({xpath : "//div/span[contains(text(),'"+pdtName+"')]/parent::div/span[@class='price']"});
        I.scrollPageToTop();
        I.waitForVisible(this.buttons.btnCart ,10);
        I.click(this.buttons.btnCart);
        I.seeElement({xpath : "//div[@class='cart-details']/span[contains(text(),'"+pdtName+"')]"});
        var Cartitems = await I.grabTextFrom({xpath : "//div[@class='cart-details']/span[contains(text(),'"+pdtName+"')]/parent::div//span[@class='price']"});
        var priceOnCart = Cartitems.slice(5);
        I.say(Itemprice);
        I.say(priceOnCart)
        if(Itemprice == priceOnCart ){
            I.say("Price : "+ priceOnCart+" of item - "+pdtName+"is correctly displayed on cart")
        }
        I.click(this.buttons.btnCart);

    },
    async selectCategory(CatgryName)
    {
        I.waitForVisible({xpath : "//h1[contains(text(),'"+CatgryName+"')]"},10);
        I.click({xpath : "//h1[contains(text(),'"+CatgryName+"')]"});

    },
    async additemToCartandVerify(item,count)
    {
        I.waitForVisible({xpath : "//div/span[contains(text(),'"+item+"')]"},10)
        I.scrollTo({xpath : "//div/span[contains(text(),'"+item+"')]"})
        I.moveCursorTo({xpath : "//div/span[contains(text(),'"+item+"')]"})
        I.waitForVisible({xpath : "//div/span[contains(text(),'"+item+"')]/parent::div/following-sibling::button"},10)
        for(var i=1 ; i<=count ; i++){
            I.click({xpath : "//div/span[contains(text(),'"+item+"')]/parent::div/following-sibling::button"});
        }
        I.scrollPageToTop();
        I.waitForVisible(this.buttons.btnCart,10);
        I.click(this.buttons.btnCart);
        I.seeElement({xpath : "//div[@class='cart-details']/span[contains(text(),'"+item+"')]"});
        var Cartitems = await I.grabTextFrom({xpath : "//div[@class='cart-details']/span[contains(text(),'"+item+"')]/parent::div//span[@class='price']"});
        var priceOnCart = Cartitems.slice(0,1);
        I.say(count)
        I.say(priceOnCart)
        if(count == priceOnCart ){
            I.say("item : "+item+" is correctly added " +count+ " times on cart")
        }
        I.click(this.buttons.btnCart);
    }


    
    
}

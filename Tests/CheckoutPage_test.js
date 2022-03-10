Feature('Checkout page Tests');
const testdata = require('C:/Users/arsinghai/Desktop/trainings/CodeceptJS/Data/Testdata.json');
td = testdata.TestFirstSet_test;

Scenario('Adding items and moving to checkout to see total',async ({ I,
        homePage,
        checkoutPage
    }

) => {
     
        I.amOnPage('/');
        await homePage.selectCategory(td.section);
        await homePage.addToCartandVerify(td.item1);
        await homePage.addToCartandVerify(td.item2);
        await checkoutPage.moveToCheckout();
        await checkoutPage.checkTotal();
});

Scenario('Increasing items in checkout to see total',async ({ I,
    homePage,
    checkoutPage
}

) => {
 
        I.amOnPage('/');
        await homePage.selectCategory(td.section);
        await homePage.addToCartandVerify(td.item1);
        await homePage.addToCartandVerify(td.item2);
        await checkoutPage.moveToCheckout();
        await checkoutPage.increaseProducts(td.item1,td.countInc);
        await checkoutPage.increaseProducts(td.item2,td.countInc);
        await checkoutPage.checkTotal();
});

Scenario('Decreasing items in checkout to see total',async ({ I,
    homePage,
    checkoutPage
}

) => {
 
        I.amOnPage('/');
        await homePage.selectCategory(td.section);
        await homePage.addToCartandVerify(td.item1);
        await homePage.addToCartandVerify(td.item2);
        await checkoutPage.moveToCheckout();
        await checkoutPage.decreaseProducts(td.item1,td.countDec);
        await checkoutPage.checkTotal();
});

Scenario('Removing items in checkout',async ({ I,
    homePage,
    checkoutPage
}

) => {
 
        I.amOnPage('/');
        await homePage.selectCategory(td.section);
        await homePage.addToCartandVerify(td.item1);
        await homePage.addToCartandVerify(td.item2);
        await checkoutPage.moveToCheckout();
        await checkoutPage.removeProducts(td.item1);
        await checkoutPage.checkTotal();
        
});





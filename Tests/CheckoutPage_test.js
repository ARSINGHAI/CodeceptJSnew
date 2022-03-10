Feature('Checkout page Tests');
const testdata = require('C:/Users/arsinghai/Desktop/trainings/CodeceptJS/Testdata.json');
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





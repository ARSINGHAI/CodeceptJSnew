Feature('Payment page Tests');
const testdata = require('C:/Users/arsinghai/Desktop/trainings/CodeceptJS/Data/Testdata.json');
td = testdata.TestFirstSet_test;

Scenario('Making payment with same billing / mailing address',async ({ I,
        homePage,
        checkoutPage,
        paymentPage
    }

) => {
     
    I.amOnPage('/');
    await homePage.selectCategory(td.section);
    await homePage.addToCartandVerify(td.item1);
    await homePage.addToCartandVerify(td.item2);
    await checkoutPage.moveToCheckout();
    await checkoutPage.checkTotal();
    await paymentPage.payNow(td.Email,td.Name,td.Address,td.Zip,td.City, td.CardNumber,td.DateValue,td.CVVval);

});





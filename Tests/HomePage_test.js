Feature('Home page Tests');
const testdata = require('C:/Users/arsinghai/Desktop/trainings/CodeceptJS/Data/Testdata.json');
td = testdata.TestFirstSet_test;

Scenario('Adding different items and checking the cart',async ({ I,
        homePage
    }

) => {
     
    I.amOnPage('/');
    await homePage.selectCategory(td.section);
    await homePage.addToCartandVerify(td.item1);
    await homePage.addToCartandVerify(td.item2);
    await homePage.addToCartandVerify(td.item3);
    

});

Scenario('Adding single item multiple times and checking the cart',async ({ I,
    homePage
}

) => {
 
        I.amOnPage('/');
        await homePage.selectCategory(td.section);
        await homePage.additemToCartandVerify(td.item3,td.count);
});



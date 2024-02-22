"use strict";
//var _selectors = require('./selectors')
const { toLeftOf, alert, openBrowser, reload, exists, clearIntercept, closeBrowser, doOnIntercept, left,intercept, button, attach, upload, fileField, scrollDown, scrollTo, click, option, onclick, rightClick, dropDown, checkBox, dropDownOption, selector } = require('taiko');
const assert = require("assert");
const taiko = require('taiko');
const { time } = require('console');
const { url } = require('inspector');
//const headless = process.env.headless_chrome.toLowerCase() === 'true';
const common = require('./functions.js');
const { TIMEOUT } = require('dns');
const path = require('path');
const { request } = require('http');




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

step("Ürün seçilir ve tıklanır. <aciklama>", async () => {
    
    const randomN = getRandomInt(1, 48);
     console.log(randomN)
    
    const xpathFormat = `//li[@id='i${randomN}']`;
    console.log("XPath ifadesi:", xpathFormat);   
    const element = await taiko.$(xpathFormat);   
    
    if (!element.exists()) {
        throw new Error(`XPath ifadesiyle öğe bulunamadı: ${xpathFormat}`);
    }    
    await taiko.click(element);
});


step("<element> tıklanır. <description>", async (element) => {
    var parameter = common.getElement(element);
    var button = taiko.button(parameter);
    await taiko.evaluate(button, (elem) => elem.click(), { navigationTimeout: 60000, force: true })


});
step("sayfa yeniden yüklenir", async (element) => {

    await taiko.reload()
});

step("<label>, <dosya> için eklenti islemi yapılır.", async (label, dosya) => {
    const lbl = common.getElement(label)
    const filepath = process.env.BASE_FILE_PATH + dosya;
    const upt = fileField(lbl, { selectHiddenElements: true })
    await taiko.attach(filepath, upt, { force: true })
});
step("<element> işlemi için tıklanır.", async (element) => {
    var elementInfo = common.getElementInfo(element);
    var query = "a[" + elementInfo.SelectorType + "*='" + elementInfo.SelectorName + "']"
    await taiko.evaluate(taiko.$(query), (elem) => elem.click(), { navigationTimeout: 60000, force: true })
});



step("<label>, <dosya> için tıklanır(resim seçimi).", async (label, dosya) => {

    const lbl = common.getElement(label)
    const filepath = process.env.BASE_FILE_PATH + dosya;
    const upt = fileField(lbl, { selectHiddenElements: true });
    await taiko.attach(filepath, upt, { force: true })

});



step("<value> milisaniye kadar beklenir. <description>", async (value) => {
    await taiko.waitFor(value)
});


step("Sayfa kaydırılır.(scroll edilir.)", async () => {
    await taiko.scrollDown(400, 900)

});

step("Sayfa yukarı kaydırılır.(scroll edilir.)", async () => {
    await taiko.scrollUp(400, 900)

});



step("<label> seçimi yapılır.", async (label) => {
    await taiko.radioButton(label).select();
});

step("<element> seçimi yapılır. <description>", async (element) => {
    var parameter = common.getElement(element);
    var radio = taiko.radioButton(parameter)
    await taiko.evaluate(radio, (elem) => elem.click(), { force: true })



});
step("<element> işlemi için tıklanır. <description>", async (element) => {
    var elementInfo = common.getElementInfo(element);
    var query = "[" + elementInfo.SelectorType + "*='" + elementInfo.SelectorName + "']"
    await taiko.evaluate(taiko.$(query), (elem) => elem.click(), { force: true })
});


step("<label> değeri olan seçeneğe tıklanır. <aciklama>", async (label) => {
    await click(label, { force: true });


});



step("<xpath> içeriğine tıklanır. <acikalama>", async (xpath) => {

    var Format = "//button[text()='" + xpath + "']"
    let cvvButtons = await taiko.$(xpathFormat).elements();
    await taiko.click(cvvButtons[0])
});

step("<element> işlemi için  tıklanır. <aciklama>", async (element) => {
    var elementInfo = common.getElementInfo(element)
    var xpathFormat = "//*[@id='" + elementInfo.SelectorName + "']"
    //*[@id="serviceCostId"]/button[@class='btn btn-filter btn-outline-primary float-right mb-2 mr-2']
     let parameter = await taiko.$(xpathFormat).elements();
    await taiko.click(parameter), { force: true }

});

step("<element> xpath işlemi için  tıklanır. <aciklama>", async (element) => {
   // console.log(element)
    var elementInfo = common.getElementInfo(element)
    var xpathFormat = "//*[@data-gauge='"+elementInfo.SelectorName + "']"
  //  console.log(xpathFormat)
    let parameter = await taiko.$(xpathFormat).elements();
        await taiko.rightClick(parameter, { force: true})
   // await taiko.click(parameter), { force: true }

})

step("<element> seçilir ve tıklanır. <aciklama>", async (element) => {
    var elementInfo = common.getElementInfo(element)
    var xpathFormat = "//*[@class='" + elementInfo.SelectorName + "']"
    // console.log(xpathFormat)
    let parameter = await taiko.$(xpathFormat).elements();
    await taiko.click(parameter)

});


step("<label> tıklanmıs gibi yap, <cevap> alınsın. <aciklama>", async (label, cevap) => {
    intercept({
        request: { url: 'https://test-multinet-selfservice.inventiv.services/Customer/BankCard' },
        mock: { response: { status: 200, contentType: 'text/plain', body: cevap } },
        callback: function doOnIntercept(request) {

            return response
        }
    })

    click(label);

});


step("intercept kaldırılır.", async () => {

    await taiko.clearIntercept('https://test-multinet-selfservice.inventiv.services/Customer/BankCard')

});





step("<label1> 'in solunda yer alan <label> için işlem yapılır. <aciklama>", async (label1, label) => {

    await click(label, { navigationTimeout: 60000 }, toLeftOf(label1))

});

step("<selector> değeri <value> içeren seçeneğe tıklanır. <description>", async (selector, value) => {

    var query = "[" + selector + "='" + value + "']"
    await taiko.evaluate(taiko.$(query), (elem) => elem.click(), { force: true })
});

step("<element> değeri <value> içeren seçim yapılır <description>", async (element, value) => {
    var elementInfo = common.getElementInfo(element);
    var parameter = common.getElement(element)
    var dropDown = taiko.dropDown(parameter);
    await dropDown.select(value);

})

step("Alanından <value> değeri içeren seçeneğe tıklanır. <description>", async (value) => {
    var checkBox = taiko.checkBox({ 'data-cardnumber': value })
    await taiko.evaluate(checkBox, (elem) => elem.click(), { force: true })
})

step("<element> için seçim yapılır. <description>", async (element) => {
    var checkBox = taiko.checkBox(common.getElement(element))
    await taiko.evaluate(checkBox, (elem) => elem.click(), { force: true })
})

step("<element> alanından <value> seçimi yapılır. <description>",
    async function selectDropDown(element, value) {
        await taiko.scrollDown(200, 900)
        var parameter = common.getElement(element)
     //   console.log(parameter, value)
        await dropDown(parameter).select(value);
    });


step("<element> değeri <text> seçeneği için işlem yapılır. <description>", async (element) => {
    var elementInfo = common.getElementInfo(element);
    var query = "a[" + elementInfo.SelectorType + "*='" + elementInfo.SelectorName + "']"
   // console.log(query)
    await taiko.evaluate(taiko.$(query), (elem) => elem.click(), { force: true }, { waitForEvents: ['loadEventFired'] })
});



step("<element> değeri <text> için işlem yapılır. <description>", async (element) => {
    var elementInfo = common.getElementInfo(element);
   // console.log(elementInfo)
    var query = "a[" + elementInfo.SelectorType + "*='" + elementInfo.SelectorName + "']"
    await taiko.mouseAction((taiko.$(query)), 'release', { x: 9, y: 9 }, { navigationTimeout: 30000 })
});

step("sayfada <label> üzerinde mouse hareketi yapılır.<description>", async (label) => {
    await taiko.hover(label)
});



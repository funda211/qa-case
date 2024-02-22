"use strict";
const { write,get,into,Number,hidden, focus,textBox,clear} = require('taiko');
const assert = require("assert");
const taiko = require('taiko');
const { time } = require('console');
const { url } = require('inspector');
//const headless = process.env.headless_chrome.toLowerCase() === 'true';
const common = require('./functions.js');
const axios = require('axios');

step("<element> alanına <value> girilir.", async (element, value) => {
  var parameter = common.getElement(element);
  //console.log(parameter)
  await focus(into(textBox(parameter)));
  await write(value,{force:true });

});

step("<element> alanına <value> yazılır.", async (element, value) => {
  var parameter = common.getElement(element);
  await focus((textBox(parameter)));
  await clear(into(textBox(parameter)))
  await write(value,into(textBox(parameter).elements(),true,{force:true },{ waitForEvents:['DOMContentLoaded','loadEventFired'], delay:200 }));

});
step("<label> alanına  <value> yazılır. <aciklama>", async (label,value) => {
  var parameter = common.getElement(label);
  await clear(parameter)
  await write(value,into(parameter.elements(),true,{force:true },{ waitForEvents:['DOMContentLoaded','loadEventFired'], delay:200 }));

  
});

step("<element> alanı boş bırakılır.", async (element) => {
  var parameter = common.getElement(element);
  await focus((textBox(parameter)));
  await clear(into(textBox(parameter)))
  
});


  step("<text> mail girişi yapılır.", async (text) => {
  await clear(textBox({"placeholder":"Mail Adresi"}))
  await write(text, into(textBox({"placeholder":"Mail Adresi"}).value()),true,{force:true });
});

step("<label> telefon girişi yapılır.", async (label) => {

 await clear(textBox({"placeholder":"Telefon Numarası"}))
  await write(label, into(textBox({"placeholder":"Telefon Numarası"}).value()),true,{force:true});
  await taiko.scrollDown(200,900)

});

step("<element> alanına rasgele telefon numarası girişi yapılır.", async (element) => {
  var i = 0;
  var text = '5';
  for (i = 0; i < 9; i++)
  {  
    text += Math.floor(Math.random() * 10);
  }

  var parameter = common.getElement(element);
  await focus(textBox(parameter));
  await write(text,textBox(parameter),true,{force:true });

});

const delay = ms => new Promise(res => setTimeout(res,ms));

step("<element> alanına <value> otp girilir.", async(element, value) => {
  let otp='';
  console.debug("Otp degeri: "+ value);
  if(value == 'dogru'){
   await delay(2000);
      axios.post('https://test-multinet-enterpriseservices-rest.inventiv.services/WebPosService/GetOtpCodeForGaugeTest', {
        appToken: '8A449F1608734ABCA920374A098753C2',
        languageCode: 'tr-TR',
        cardNumber:'6656900004091436',
        merchantId:'289851', 
        terminalId:'139455'
      }).then((response) => {
        console.log(response);
        otp = response.data.Result   
     }, (error) => {
        console.log(error);
      });
      
  }else{
    otp = 1234;
  }

      var parameter = common.getElement(element);
      await focus(textBox(parameter));
      await write(otp);
});


step("<value> numaralı kartın bloklandığı doğrulanır.", async(value) => {
  
  await delay(2000);
  axios.post('https://test-multinet-enterpriseservices-rest.inventiv.services/WebPosService/IsBlocked', {
      appToken: '8A449F1608734ABCA920374A098753C2',
      languageCode: 'tr-TR',
      cardId: value
  }).then((response) => {
        console.log(response);
        if(response.data.Result == true){ 
          console.log('======> kart blokelidir.');
        }
        else {
          throw 'Kart bloklanması gerçekleşmemiştir.';
        }

     }, (error) => {
        console.log(error);
      });

});

step("<value> numaralı kartın blokesi kaldırılır.", async(value) => {
  
  await delay(2000);

  axios.post('https://test-multinet-enterpriseservices-rest.inventiv.services/WebPosService/Unblock', {
    appToken: '8A449F1608734ABCA920374A098753C2',
    languageCode: 'tr-TR',
    cardId: value,
    blackReason: '18',
    onlinePaymentPermission: 'true',
    otpGsmNumber: "5382776483"
}).then((response) => {
  console.log(response);

   if(response.data.ResultCode !=0){
     throw 'Kart bloklanması kaldırma sırasında hata alındı.';
    }
  }, (error) => {
    console.log(error);
  });

  await delay(2000);


});
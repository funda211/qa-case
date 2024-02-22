"use strict";

const { text} = require('taiko');
const assert = require("assert");
const taiko = require('taiko');
const { time } = require('console');
const { url } = require('inspector');
const common = require('./functions.js');


step("<label> ekranına gelirse islem basarili olmustur.", async (label) => {
    assert.strictEqual(await text(label).exists(),true,{force:true});
});



step("<label> seklinde uyarı verilir.", async (label) => {
    assert.strictEqual(await text(label).exists(),false);
  
});


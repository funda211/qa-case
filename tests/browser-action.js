"use strict";

const { goto} = require('taiko');
const assert = require("assert");
const taiko = require('taiko');
const { time } = require('console');
const { url } = require('inspector');
const common = require('./functions.js');
const headless = false
const full_screen = true
step("<projectName> projesi ana sayfasına girilir.", async(projectName) => {
      common.setActiveProject(projectName);
    await goto(process.env.BASE_URL,{waitForEvents:['loadEventFired']})
});
step("Sayfa kapatılır.", async () => {
    await taiko.closeTab()

});




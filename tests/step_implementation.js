/* globals gauge*/
"use strict";
const { openBrowser, closeBrowser,screenshot } = require('taiko');


const headless = false
const full_screen= process.env.full_screen;
//const full_screen = false
beforeSuite(async () => {
    var startParams = full_screen=='true'
    ? {headless: headless,args:["--start-fullscreen"]}
    : {headless: headless}

    await openBrowser(startParams)     

  });


afterSuite(async () => {
    await closeBrowser();
});

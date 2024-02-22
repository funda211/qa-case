const { Console } = require("console");
const { env } = require("process");
const taiko = require('taiko');

class Functions{

    setActiveProject(projectName){
        process.env.ACTIVE_PROJECT = projectName;

        var elementDictionary = require("../../hepsiburada/files/html-element-dictionary.json");
        var baseUrl = elementDictionary[process.env.ACTIVE_PROJECT]["BaseUrl"];

        process.env.BASE_URL = baseUrl;
        
        var httpsbaseUrl= elementDictionary[process.env.ACTIVE_PROJECT]["HttpsBaseUrl"];
        process.env.HTTPS_BASE_URL = httpsbaseUrl;
    }

    getElement(friendlyName){
        var elementDictionary = require("../../hepsiburada/files/html-element-dictionary.json");
        var elementInfo = elementDictionary[process.env.ACTIVE_PROJECT][friendlyName];
        var parameter = {};
        parameter[elementInfo.SelectorType] = elementInfo.SelectorName

    
        return parameter;
    }


    getElementInfo(friendlyName){
        var elementDictionary = require("../../hepsiburada/files/html-element-dictionary.json");
        var elementInfo = elementDictionary[process.env.ACTIVE_PROJECT][friendlyName];
        return elementInfo
    }

 
}


module.exports = new Functions();

/**
 * Constructor
 */
function CDVPluginAppirater(){};

/**
 * Alerts Appirater that an important event has occured
 * @param {Function} response callback on success
 * @param {Function} response callback on failure
 */
CDVPluginAppirater.prototype.addAppiraterEvent = function (successCallback, errorCallback){
if(successCallback == null) successCallback = function(){};
if(errorCallback == null) errorCallback = function(){};
cordova.exec(successCallback, errorCallback, 'CDVPluginAppirater', 'addAppiraterEvent', []);
}

module.exports = new CDVPluginAppirater();
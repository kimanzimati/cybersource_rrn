'use strict';

/*
* Merchant configuration properties are taken from Configuration module
*/

// common parameters
const AuthenticationType = 'http_signature';
const RunEnvironment = 'apitest.cybersource.com';
const MerchantId = 'ecomr003512';

// http_signature parameters
const MerchantKeyId = '8e3c67f3-4cb0-4384-9058-a6ffcd3457b8';
const MerchantSecretKey = '8e/jLA+zOXBhgyenIeRDWB1ZbPpKdJ1ApPyzVrd4LhA=';

// jwt parameters
const KeysDirectory = 'Resource';
const KeyFileName = 'testrest';
const KeyAlias = 'testrest';
const KeyPass = 'testrest';

//meta key parameters
const UseMetaKey = false;
const PortfolioID = '';

// logging parameters
const EnableLog = true;
const LogFileName = 'cybs';
const LogDirectory = 'log';
const LogfileMaxSize = '5242880'; //10 MB In Bytes
const EnableMasking = true;

// Constructor for Configuration
function Configuration() {

    var configObj = {
        'authenticationType': AuthenticationType,
        'runEnvironment': RunEnvironment,

        'merchantID': MerchantId,
        'merchantKeyId': MerchantKeyId,
        'merchantsecretKey': MerchantSecretKey,

        'keyAlias': KeyAlias,
        'keyPass': KeyPass,
        'keyFileName': KeyFileName,
        'keysDirectory': KeysDirectory,

        'useMetaKey': UseMetaKey,
        'portfolioID': PortfolioID,

        'logConfiguration': {
            'enableLog': EnableLog,
            'logFileName': LogFileName,
            'logDirectory': LogDirectory,
            'logFileMaxSize': LogfileMaxSize,
            'loggingLevel': 'debug',
            'enableMasking': EnableMasking
        }
    };
    return configObj;

}

module.exports = Configuration;

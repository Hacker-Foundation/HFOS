/*
  HFOS JavaScript Components & APIs

  Copyright (c) 2015 Hacker Foundation. All rights reserved
  Licensed under the MIT License.


*/

//This is simply a wrapper file for implementing window.hfos when all of the scripts have loaded.

// Add a hfos object with an addNativeModule function so native modules can be inserted when loading.

(function (window, modulesArrayTemporaryStorage) {
  window[modulesArrayTemporaryStorage] = []; //This array is used to store the names of the native modules that will be loaded later.
  var hfos = {
    "util": {
      "defineNativeModule": function (moduleName) {
        if(window[modulesArrayTemporaryStorage].indexOf(moduleName)===-1) {
          window[modulesArrayTemporaryStorage].push(moduleName);
        }
      }
    }
  };
  window.hfos = hfos;
})(window, "HFOSNativeModulesTemporaryObject");

//Check that RequireJS is loaded.

if (!window.requirejs) {
  
  console.info("RequireJS loading failed");
  throw new Error("RequireJS loading failed");
}

//If code execution reaches here, assume that RequireJS loading has succeeded.

//We don't want to explicitly set a data-main attribute for RequireJS, so we use require.config:

require.config({
  "baseUrl": "/src/hfos.js" //Absolute path
});
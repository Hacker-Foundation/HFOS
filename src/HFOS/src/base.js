/*
  HFOS JavaScript Components & APIs

  Copyright (c) 2015 Hacker Foundation. All rights reserved
  Licensed under the MIT License.


*/

//This is simply a wrapper file for implementing window.hfos when all of the scripts have loaded.


// Add a hfos object with an addNativeModule function so native modules can be inserted when loading.


if (!window.requirejs) {

  console.info("RequireJS loading failed");
  throw new Error("RequireJS loading failed");
}

//If code execution reaches here, assume that RequireJS loading has succeeded.

//We don't want to explicitly set a data-main attribute for RequireJS, so we use require.config:

require.config({
  "baseUrl": "/src/"
});
require(["hfos"], function(hfos){
  window.hfos=hfos;
});


//Have a callback when hfos loads
(function (window, HFOSOnloadStorage) {
  window.HFOSOnloadStorage = [];
  window.HFOSOnloadCallback = function () {
    return new Promise(function (resolve) {
      window.HFOSOnloadStorage.push(resolve);
    });
  }

})(window);

//Check that RequireJS is loaded.


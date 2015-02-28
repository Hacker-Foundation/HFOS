/*
  HFOS JavaScript Components & APIs

  Copyright (c) 2015 Hacker Foundation. All rights reserved
  Licensed under the MIT License.


*/

// Add a hfos object with an addNativeModule function so native modules can be inserted when loading.



//Define core components

define(["core"],
function (hfos) {

  alert(3);
  window.hfos = hfos;
  return hfos;

});
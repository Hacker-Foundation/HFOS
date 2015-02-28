/*
  HFOS JavaScript Components & APIs

  Copyright (c) 2015 Hacker Foundation. All rights reserved
  Licensed under the MIT License.


*/

//Define core components

define(["core"],
function (hfos) {
  window.hfos = hfos;
  //Run the hfos onload listeners
  HFOSOnloadStorage["length"]
  for (i in HFOSOnloadStorage) {
    HFOSOnloadStorage[i]();
  }

  return hfos;
});
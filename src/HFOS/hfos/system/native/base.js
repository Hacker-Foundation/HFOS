/*
  This file is used to initialize all things before starting to use any of the secondary HFOS APIs.
*/

//Used to initialize an anonymous namespace
(function (window) {
  var hfos = {



    //hfos object internal components
    "internals": {
      //The modules that are loaded into HFOS. The initial array contains the modules loaded directly from base.js
      "loadedModuleList": ["hfos.util"],
      //Mark a module as loaded in the loaded module list
      "addLoadedModule": function (moduleName) {
        //If module not already in list, add it to the list
        if (hfos.internals.loadedModuleList.indexOf(moduleName) === -1) {
          hfos.internals.loadedModuleList.push(moduleName);
        }
      },

      //This function is for loading native scripts (modules such as hfos.filesystem contained in JavaScript files into HFOS)
      "loadNativeModule": function (moduleURL, parentNode) {
        var DOMScriptElement = document.createElement("script");  //The script element that will contain the module
        DOMScriptElement.async = 1; //Set the script's asynchronous loading to true
        DOMScriptElement.src = moduleURL; //Set the script's source URL to the one specified in the function
        return DOMScriptElement;
      }
    },



    //The basic utilities used in HFOS such as checking if a file is loaded
    "util": {
      //A convenience variable containing the <head> tag of the page
      //"head": document.getElementsByTagName
      //Module utilities
      "modules": {
        //Defining something to do when a module is loaded
        "whenLoaded": function(moduleName){
        
          return new Promise(function (resolved, rejected) {
            //Resolve the promise immediately if the module is already loaded
            //The below is a way to check whether a value is already in the array
            if (hfos.internals.loadedModuleList.indexOf(moduleName) !== -1) {
              resolved();
            } else {
              //If not, add observer to the loaded modules array to be notified whenever the array changes
              Object.observe(hfos.internals.loadedModuleList,function(changes) {
                //Check if the module is the one the caller of this function asked for. If so, resolve.
                if (hfos.internals.loadedModuleList.indexOf(moduleName) !== -1) {
                  resolved();
                }
              })
            }


          });

        },
        //Checks whether a module is loaded
        "isLoaded": function(moduleName) {
          return hfos.internals.loadedModuleList.indexOf(moduleName) !== -1
        }

      }

    }
  };

  //Initialize HFOS database in hfos.internals.db
  (function () {
    //The hfos IndexedDB database used to store OS data
    var DBRequest = indexedDB.open("hfos");
    //On success, initialize the DB request and database to hfos.internals.db
    DBRequest.onsuccess = function (ev) {
      hfos.internals.db = ev.target.result;
    }
  })();



  //Add hfos to the window namespace
  window.hfos = hfos;

})(window)
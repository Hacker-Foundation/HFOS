
(function (window) {
  //Check that HFOS is initialized
  if (!window.hfos) {
    throw new Error("window.hfos must be first initiated with ")
  }
  //The hfos.filesystem oject
  var filesystem = {
    "util": {
      "init": function () {

        //Code for initiailizing the file system
        


      }
    }
  };

})(window);  //This makes sure that the window object can be purged when minified and that
(function () {
  var setInstallationError = function (errorMsg) {
    Installer.setInstHeading('Installation failed');
    Installer.setInstSubheading('An error occured during installation.');
    Installer.setLoadingText(errorMsg);
    Installer.removeLoadingBar();
  }
  var deleteDatabase = function (DatabaseName, done) {
    var req = indexedDB.deleteDatabase(DatabaseName);
    req.onsuccess = typeof done === "function" ? done : null;
  };


  var initializeFileSystem = function () {

    Installer.setLoadingText("Creating file system");

    

    var Database;

    var DatabaseRequest = indexedDB.open("hfos");

    //Database error handling
    DatabaseRequest.onerror = function (event) {
      //Display an error message with reference to DatabaseRequest.errorCode
      setInstallationError("An error occured while accessing IndexedDB");
      console.log(event.target)
    }

    DatabaseRequest.onsuccess = function (event) {
      //Request succeeded!
      //Do something with request.result.
      Database = event.target.result;
    }

    DatabaseRequest.onupgradeneeded = function (event) {
      var Database = event.target.result;

      // Create an objectStore for this database
      var FileSystem = Database.createObjectStore("FileSystem", { keyPath: "Path" });
      //
      FileSystem.createIndex("Path", "Path", { unique: true });
      FileSystem.createIndex("DateCreated", "DateCreated", { unique: false });
      FileSystem.createIndex("DateLastModified", "DateLastModified", { unique: false });
      FileSystem.createIndex("ItemType", "ItemType", { unique: false });

      DatabaseRequest.onupgradeneeded = null;
    }

  };

  //End create file system

  deleteDatabase("hfos", initializeFileSystem);


})()
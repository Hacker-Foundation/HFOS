define([

  "core",
  "./util/modulemanager"

], function ( hfos , moduleManager) {

  hfos.util = {
    "modules": moduleManager
  };
  return hfos;

});
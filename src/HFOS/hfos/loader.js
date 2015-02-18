//Loads critical components
(function () {
  //Check if HFOS is installed on the system.
  if (!localStorage.getItem('installed')) {
    open('install.html', '_self');
  }
}).call(this);
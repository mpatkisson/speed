
var speed = (function () {

  var services = {},
      controllers = {};

  function registerService(name, service) {
    services[name] = service;
  }

  function registerController(name, controller) {
    controllers[name] = controller;
  }

  function runController(name) {
    var controller = controllers[name];
    if (controller) {
      controller(services);
    }
  }

  return {
    registerService: registerService,
    registerController: registerController
  };

})();

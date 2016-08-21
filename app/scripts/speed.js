
var speed = (function () {
  var modelBindingProvider = null,
      services = {},
      controllers = {},
      routes = {};

  function registerService(name, service) {
    services[name] = service;
  }

  function createRoutes() {
    var self = this;
    self.add = function (route, action) {

    }
  }

  function registerController(name, controller) {
    routes[name] = createRoutes();
    controllers[name] = controller;
  }

  function init(options) {
    var key = null,
        router = null,
        controller = null,
        options;
    for (key in controllers) {
      if (controllers.hasOwnProperty(key)) {
        router = routes[key];
        controller = controllers[key];
        controller(router, services);
      }
    }
  }

  function go(route) {
    var controller = getController(route),
        action = getAction(controller, route);
    window.location.hash = route
    addTemplateToDom(action.view);
    modelBindingProvier.bind(action.view);
  }

  return {
    service: registerService,
    controller: registerController,
    init: init
  };

})();

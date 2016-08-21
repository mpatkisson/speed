
speed.controller('home', function (routes, services) {

  // Should look for a template named '/home/index' and return a promise.
  routes.add('', function ()) {
    var promise = speed.createPromise();
    return promise;
  });

  // Should look for a template named '/home/about' and return a promise.
  routes.add('about', function ()) {
    var promise = speed.createPromise();
    return promise;
  });

  // Should look for a template named 'foo', parse the 'bar' parameter, and
  // return a promise.
  routes.add('foo/:bar', function (bar) {
    var promise = speed.createPromise();
    return promise;
  });

  // Template: /foo/bar
  // Parameter(s): 'baz'
  // Returns: promise
  routes add('foo/bar/:baz', function (baz) {
    var promise = speed.createPromise();
    return promise;
  });

  // Template: '/baz'
  // Returns: object
  routes.add('foo/bar', function () {
    var promise = speed.createPromise();
    return {
      view: 'baz',
      promise: promise
    };
  })

});

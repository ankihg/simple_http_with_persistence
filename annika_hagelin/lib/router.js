var Router = module.exports = function() {

  this.routes = {
    'GET': {},
    'POST': {}
  };

};

Router.prototype.get = function(route, cb) {
  console.log('setting '+route);
  this.routes.GET[route] = cb;
  console.log(this.routes['GET']);
};

Router.prototype.route = function(req, res) {
  console.log(req.method);
  console.log(req.url);
  console.log(this.routes[req.method]);
  this.routes[req.method][req.url](req, res);
};

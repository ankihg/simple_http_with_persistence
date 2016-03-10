var Router = module.exports = function() {

  this.routes = {
    'GET': {},
    'POST': {}
  };

};

Router.prototype.get = function(route, cb) {
  this.routes.GET[route] = cb;
};

Router.prototype.post = function(route, cb) {
  this.routes.POST[route] = cb;
};

Router.prototype.route = function(req, res) {
  console.log(req.method);
  console.log(req.url);
  console.log(this.routes[req.method]);
  this.routes[req.method][req.url](req, res);
};

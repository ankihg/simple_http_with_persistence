var Router = require(__dirname + '/../lib/router.js');
var treeRouter = module.exports = new Router();

treeRouter.get('/trees', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('cedrus deodara');
  res.end();
});

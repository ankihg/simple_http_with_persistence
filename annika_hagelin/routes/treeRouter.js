var fs = require('fs');
var Router = require(__dirname + '/../lib/router.js');

var treeRouter = module.exports = new Router();

treeRouter.get('/trees', (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('cedrus deodara');
  res.end();
});

treeRouter.post('/trees', (req, res) => {
  console.log(req.headers.name);

  fs.readdir(__dirname + '/../trees', (err, files) => {
    if (err) {
      res.writeHead(500, {'content-type': 'text/html'});
      res.end();
    }
    var tree = {id: files.length, name: req.headers.name};

    fs.writeFile(__dirname + '/../trees/tr'+files.length+'.json', JSON.stringify(tree), (err) => {
      if (err) res.writeHead(500, {'content-type': 'text/html'});
      else res.writeHead(200, {'content-type': 'text/html'});
      res.end();
    });
  });

});

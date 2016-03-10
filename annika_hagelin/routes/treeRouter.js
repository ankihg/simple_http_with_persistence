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
  var tree = {name: req.headers.name};
  fs.writeFile(__dirname + '/../trees/plz.json', JSON.stringify(tree), (err) => {
    if (err) throw err;
  });
  fs.readdir(__dirname + '/../trees', (err, files) => {
    if (err) throw err;
    console.log(files);
  });

});

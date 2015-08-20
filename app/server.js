var differenceController  = require('./controllers/differenceController'),
    bodyParser            = require('body-parser'),
    express               = require('express'),
    path                  = require('path'),
    app                   = express(),
    router                = express.Router();

var server = function server() {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, 'timesince')));
  app.use('/public', express.static('./public'));
  app.use('/bower_components', express.static('./bower_components'));

  router.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
  });

  require('./config/routes')(app, differenceController);

  app.use('/', router);

  app.use(function(req, res) {
    res.status(404);
    res.sendFile(__dirname + '/views/404.html');
  });

  server.prototype.destroy = function destroy() {
    app.close();
  };

  server.prototype.start = function start(port) {
    app.listen(port, function() {
      console.log("I'm sorry, Dave. I'm afraid I can't do that.");
    });
  };
};

module.exports = server;

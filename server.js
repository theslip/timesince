var differenceController  = require('./app/controllers/differenceController'),
    testController        = require('./app/controllers/testController'),
    bodyParser            = require('body-parser'),
    express               = require('express'),
    path                  = require('path'),
    app                   = express(),
    router                = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'timesince')));
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

router.get('/*', function(req, res){
  res.sendFile(__dirname + "/app/views/index.html");
});

require('./app/config/routes')(app, differenceController, testController);

app.use('*', function(req, res) {
  res.status(404);
  res.sendFile(__dirname + "/app/views/404.html");
});

app.listen(5436, function() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.");
});

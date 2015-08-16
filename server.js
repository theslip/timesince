var differenceController  = require('./app/controllers/differenceController'),
    testController        = require('./app/controllers/testController'),
    subdomain             = require('express-subdomain'),
    bodyParser            = require('body-parser'),
    express               = require('express'),
    path                  = require('path'),
    app                   = express(),
    router                = express.Router();

var port = app.set('port', process.env.PORT || 3000);

// var enableCors = require('./app/config/cors');

// app.use(enableCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'timesince')));
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

router.get('/', function(req, res) {
  // res.sendFile(__dirname + "/app/views/index.html");
  res.send('Q!');
});

require('./app/config/routes')(app, differenceController, testController);

app.use(subdomain('timesince', router));

app.use('*', function(req, res) {
  res.status(404);
  res.sendFile(__dirname + "/app/views/404.html");
});

app.use(subdomain('timesince', router));

app.listen(app.get('port'), function() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.");
});

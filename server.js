var differenceController = require('./app/controllers/differenceController'),
    testController = require('./app/controllers/testController'),
    subdomain = require('express-subdomain'),
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express(),
    router = express.Router();


var enableCors = require('./app/config/cors');

app.use(enableCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'timesince')));
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

require('./app/config/routes')(app, differenceController, testController);

app.use(subdomain('timesince', router));
app.listen(1337, '0.0.0.0', function() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.");
});

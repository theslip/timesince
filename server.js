var differenceController = require('./app/controllers/differenceController'),
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express();


var enableCors = require('./app/config/cors');

// app.use(enableCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'timesince')));
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
require('./app/config/routes')(app, differenceController);

app.listen(3000, function() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.");
});

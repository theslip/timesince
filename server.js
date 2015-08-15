var differenceController = require('./controllers/differenceController'),
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'timesince')));
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
require('./routes')(app, differenceController);

app.listen(3000, function() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.");
});

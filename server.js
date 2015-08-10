var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'timesince')));
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/components', express.static(__dirname + '/components'));

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(8080);

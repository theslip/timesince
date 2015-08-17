var differenceController  = require('./app/controllers/differenceController'),
    testController        = require('./app/controllers/testController'),
    subdomain             = require('express-subdomain'),
    bodyParser            = require('body-parser'),
    express               = require('express'),
    path                  = require('path'),
    app                   = express();

var port = app.set('port', process.env.PORT || 3000);

var router = express.Router(),
    routerTimesince = express.Router();

router.get('/', function(req, res) {
  res.send('home');
});

routerTimesince.get('/', function(req, res) {
  res.send('timesince');
});

router.use(subdomain('timesince', routerTimesince));


app.listen(app.get('port'), function() {
  console.log("I'm sorry, Dave. I'm afraid I can't do that.");
});

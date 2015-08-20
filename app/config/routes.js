differenceController  = require('../controllers/differenceController');

module.exports = function(router) {
  router.post('/difference', differenceController.getInputFromUser);
  router.get('/', function(req, res){
    res.sendFile('index.html', {"root": 'app/views'});
  });
  router.use(function(req, res) {
    res.status(404);
    res.sendFile('404.html', {"root": 'app/views'});
  });
}

var bodyParser = require('body-parser');

module.exports = function serverConfig(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

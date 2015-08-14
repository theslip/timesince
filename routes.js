module.exports = function(app){
    var difference = require('./controllers/differenceController');
    app.post('/difference', difference.getInputFromUser);
}

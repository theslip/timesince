module.exports = function(app, differenceController) {
    app.post('/difference', differenceController.getInputFromUser);
}

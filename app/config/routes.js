module.exports = function(app, differenceController, testController) {
    app.post('/difference', differenceController.getInputFromUser);
}

module.exports = function(app, differenceController, testController) {
    app.post('/difference', differenceController.getInputFromUser);
    app.get('/test', testController.getTestData);
}

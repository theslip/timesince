module.exports = function(app, differenceController, testController) {
    app.post(__dirname + '/difference', differenceController.getInputFromUser);
    app.get(__dirname + '/test', testController.getTestData);
}

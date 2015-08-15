module.exports = function(router, differenceController, testController) {
    router.post(__dirname + '/difference', differenceController.getInputFromUser);
    router.get(__dirname + '/test', testController.getTestData);
}

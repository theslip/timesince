module.exports = function(router, differenceController, testController) {
    router.post('/difference', differenceController.getInputFromUser);
    router.get('/test', testController.getTestData);
}

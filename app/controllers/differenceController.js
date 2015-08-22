var _ = require('lodash');
var moment = require('moment');
var bunyan = require('bunyan');
var dateDifferenceModel = require('../models/dateDifferenceModel.js');

var log = bunyan.createLogger({
  name: 'differenceControllerLog',
  streams: [{
      type: 'rotating-file',
      path: './app/logs/differenceController.json',
      period: '1d',
      count: 1
  }]
});

exports.getInputFromUser = function(req, res) {
  res.status(200);
  var differenceLog = log.info(req);
  var dateOuput = '';
  var userInput = req.body.date;
  var dateDifferenceModel = getDifferenceBetweenDates(userInput);

  _.each(dateDifferenceModel, function(value, key) {
    dateOuput += value.time + ' ' + value.name;
    if ((dateDifferenceModel.length)-1 !== key) {
      dateOuput += ', ';
    }
  });
  res.send(dateOuput);
};

var getDifferenceBetweenDates = function getDifferenceBetweenDates(userInput) {
  var userDate = moment(userInput);
  var currentTime = moment();
  var difference = [];
  var unitOfTime = [
    'years',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes'
  ];

  _.each(unitOfTime, function(unit, index) {
    var dateDifference = new dateDifferenceModel(unit, currentTime, userDate);
    if (_.isUndefined(dateDifference.time)) {
      return;
    }
    difference.push(dateDifference);
  });
  return difference;
};

var _ = require('lodash');
var moment = require('moment');
var fs = require('fs');
var util = require('util');
var dateDifferenceModel = require('../models/dateDifferenceModel.js');

exports.getInputFromUser = function(req, res) {
  res.status(200);
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

// fs.writeFileSync('./logs/getInputFromUser.txt', util.inspect(req.body) , 'utf-8');

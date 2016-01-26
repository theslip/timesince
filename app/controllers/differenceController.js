/* eslint-env node, node */
'use strict'

var _ = require('lodash')
var moment = require('moment')
var bunyan = require('bunyan')
var DateDifferenceModel = require('../models/DateDifferenceModel.js')

var log = bunyan.createLogger({
  name: 'differenceControllerLog',
  streams: [{
    type: 'rotating-file',
    path: './app/logs/differenceController.json',
    period: '1d',
    count: 1
  }]
})

exports.getInputFromUser = function (req, res) {
  res.status(200)
  log.info(req)
  var dateOuput = ''
  var userInput = req.body.date
  var dateDifferenceModel = getDifferenceBetweenDates(userInput)

  _.each(dateDifferenceModel, function (value, key) {
    dateOuput += value.time + ' ' + determinePluralOrSingularUnitOfTime(value.time, value.name)
    if ((dateDifferenceModel.length) - 1 !== key) {
      dateOuput += ', '
    }
  })
  res.send(dateOuput)
}

var determinePluralOrSingularUnitOfTime = function determinePluralOrSingularUnitOfTime (differenceInTime, unitOfTime) {
  if (differenceInTime == 1) {
    return unitOfTime.slice(0, - 1)
  }
  else {
    return unitOfTime
  }
};

var getDifferenceBetweenDates = function getDifferenceBetweenDates (userInput) {
  var userDate = moment(userInput)
  var currentTime = moment()
  var difference = []
  var unitOfTime = ['years', 'months', 'weeks', 'days', 'hours', 'minutes']

  _.each(unitOfTime, function (unit) {
    var dateDifference = new DateDifferenceModel(unit, currentTime, userDate)
    if (_.isUndefined(dateDifference.time)) {
      return
    }
    difference.push(dateDifference)
  })
  return difference
}

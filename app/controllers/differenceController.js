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

var getInputFromUser = function getInputFromUser(req, res) {
  res.status(200)
  log.info(req)
  var userInput = req.body.date
  var dateOutput = getDateOutput(userInput)
  res.send(dateOutput)
}

var getDateOutput = function getDateOutput (userInput) {
  var dateOutput = ''
  var dateDifferenceModel = getDifferenceBetweenDates(userInput)
  console.log(dateDifferenceModel)

  _.each(dateDifferenceModel, function (value, key) {
    var unitOfTime = determinePluralOrSingularUnitOfTime(value.time, value.name)

    dateOutput += value.time + ' ' + unitOfTime
    if ((dateDifferenceModel.length) - 1 !== key) {
      dateOutput += ', '
    }
  })
  return dateOutput
}

var determinePluralOrSingularUnitOfTime = function determinePluralOrSingularUnitOfTime (differenceInTime, unitOfTime) {
  if (differenceInTime == 1) {
    return unitOfTime.slice(0, - 1)
  }
  else {
    return unitOfTime
  }
}

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

module.exports = {
  getInputFromUser: getInputFromUser,
  getDateOutput: getDateOutput,
  determinePluralOrSingularUnitOfTime: determinePluralOrSingularUnitOfTime,
  getDifferenceBetweenDates: getDifferenceBetweenDates
}

'use strict'

var DateDifferenceModel = require('./DateDifferenceModel')
var moment = require('moment')

var main = function () {
  var differenceInputField = document.getElementById('difference')
  var dateOuput = getDateOutput()

  dateOuput ? showInput(differenceInputField, dateOuput) : hideInput(differenceInputField)
}

var getDateFromInput = function getDateFromInput () {
  var dateEnteredByUser = getTextFromElement('date')
  dateEnteredByUser = new Date(dateEnteredByUser)

  return dateEnteredByUser
}

var getDateOutput = function getDateOutput () {
  var userInput = getDateFromInput()
  var dateOutput = ''
  var dateDifferenceModel = getDifferenceBetweenDates(userInput)

  dateDifferenceModel.forEach(function (value, key) {
    var unitOfTime = determinePluralOrSingularUnitOfTime(value.time, value.name)

    dateOutput += value.time + ' ' + unitOfTime
    if ((dateDifferenceModel.length) - 1 !== key) {
      dateOutput += ', '
    }
  })
  return dateOutput
}

var determinePluralOrSingularUnitOfTime = function determinePluralOrSingularUnitOfTime (differenceInTime, unitOfTime) {
  if (differenceInTime === 1) {
    return unitOfTime.slice(0, -1)
  } else {
    return unitOfTime
  }
}

var getDifferenceBetweenDates = function getDifferenceBetweenDates (userInput) {
  var userDate = moment(userInput)
  var currentTime = moment()
  var difference = []
  var unitOfTime = ['years', 'months', 'weeks', 'days', 'hours', 'minutes']

  unitOfTime.forEach(function (unit) {
    var dateDifference = new DateDifferenceModel(unit, currentTime, userDate)
    if (dateDifference.time === undefined) {
      return
    }
    difference.push(dateDifference)
  })
  return difference
}

var getTextFromElement = function (elementName) {
  return document.getElementById(elementName).value
}

var setTextInElement = function (elementName, text) {
  document.getElementById(elementName).value = text
}

var showInput = function (differenceInputField, dateOuput) {
  setTextInElement('difference', dateOuput)
  differenceInputField.classList.add('cursor-text')
  differenceInputField.classList.remove('invisible')
}

var hideInput = function (differenceInputField) {
  differenceInputField.classList.remove('cursor-text')
  differenceInputField.classList.add('invisible')
}

module.exports = main

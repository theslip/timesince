/* exported ClientModule */
'use strict'

var ClientModule = (function ClientModule () {

  var END_POINT = '/difference'

  var getDateFromInput = function getDateFromInput () {
    var dateEnteredByUser = getTextFromElement('date')
    dateEnteredByUser = new Date(dateEnteredByUser)

    return dateEnteredByUser
  }

  var postUserInputToServer = function (url, dateEnteredByUser, callback) {
    var req = new XMLHttpRequest()

    req.open('POST', url, true)
    req.setRequestHeader('Content-type', 'application/json')

    req.addEventListener('readystatechange', function () {
      if (req.status === 200) {
        callback(req.responseText)
      }
    })

    req.addEventListener('error', function () {
      alert('Server did not respond')
    })

    dateEnteredByUser = JSON.stringify(dateEnteredByUser)
    req.send(dateEnteredByUser)
  }

  var successHandler = function (response) {
    var differenceInputField = document.getElementById('difference')

    response
      ? showInput(differenceInputField, response)
      : hideInput(differenceInputField)
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

  return {
    main: function main () {
      var dateEnteredByUser = { date: getDateFromInput() }
      postUserInputToServer(END_POINT, dateEnteredByUser, successHandler)
    }
  }
})()

'use strict';

(function ListenerModule (app) {

  document.addEventListener('DOMContentLoaded', function domOnLoad () {
    document.removeEventListener('DOMContentLoaded', domOnLoad, false)
    onDomReady()
    fadeWebPageIn()
  }, false)

  var onDomReady = function onDomReady () {
    var differenceInputField = document.getElementById('difference')
    var dateInput = document.getElementById('date')

    dateInput.focus()
    differenceInputField.disabled = true
    differenceInputField.classList.add('invisible')
    watchForEnterKeyOnDateInput(dateInput)
  }

  var watchForEnterKeyOnDateInput = function watchForEnterKeyOnDateInput (userInput) {

    userInput.onkeypress = function (event) {
      var keyCode = event.keyCode || event.which
      if (keyCode === 13) {
        app.main()
      }
    }
  }

  var fadeWebPageIn = function fadeWebPageIn () {
    document.body.classList.add('visible')
  }

})(ClientModule)

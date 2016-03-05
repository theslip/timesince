'use strict'

// var main = require('./clientApp')

document.addEventListener('DOMContentLoaded', function domOnLoad () {
  document.removeEventListener('DOMContentLoaded', domOnLoad, false)
  // onDomReady()
  fadeWebPageIn()
}, false)

// var onDomReady = function onDomReady () {
//   var differenceInputField = document.getElementById('difference')
//   var dateInput = document.getElementById('date')
//
//   dateInput.focus()
//   differenceInputField.disabled = true
//   watchForEnterKeyOnDateInput(dateInput)
// }

// var watchForEnterKeyOnDateInput = function watchForEnterKeyOnDateInput (userInput) {
//   userInput.onkeypress = function (event) {
//     var keyCode = event.keyCode || event.which
//     if (keyCode === 13) {
//       main()
//     }
//   }
// }

var fadeWebPageIn = function fadeWebPageIn () {
  document.body.classList.add('visible')
}

document.addEventListener('DOMContentLoaded', onDomReady);

function onDomReady() {
  var differenceInput = document.getElementById('difference');
  var dateInput = document.getElementById('date');
  dateInput.focus();
  differenceInput.disabled = true;
  watchForEnterKeyOnDateInput(dateInput)
};

function watchForEnterKeyOnDateInput(userInput) {
  userInput.onkeypress = function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode == '13') {
      app.main();
    }
  }
};

//Only needed when seconds are enabled
// function installInterval(userInput) {
//   if (userInput) {
//     setInterval(app.main, 1000);
//   }
// };

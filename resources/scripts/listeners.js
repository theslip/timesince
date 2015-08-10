document.addEventListener('DOMContentLoaded', installListeners);

function installListeners () {
  var dateInput = document.getElementById('date');
  dateInput.focus();
  dateInput.onkeypress = function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode == '13') {
      app.main();
    }
  }
}

//Only needed when seconds are enabled
// function installInterval () {
//   var userInput = app.getTextFromElement('date');
//
//   if (userInput) {
//     setInterval(app.main, 1000);
//   }
// };

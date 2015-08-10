document.addEventListener('DOMContentLoaded', installListeners);

function installListeners () {
  document.getElementById('date').onkeypress = function(event) {
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

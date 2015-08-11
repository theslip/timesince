document.addEventListener('DOMContentLoaded', onDomReady);

function onDomReady() {
  var dateInput = document.getElementById('date');
  dateInput.focus();
  installListeners(dateInput)
};

function installListeners(userInput) {
  userInput.onkeypress = function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode == '13') {
      app.main();
    }
  }
}

//Only needed when seconds are enabled
// function installInterval(userInput) {
//   if (userInput) {
//     setInterval(app.main, 1000);
//   }
// };

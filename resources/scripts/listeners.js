document.addEventListener('DOMContentLoaded', installListeners);

function installListeners () {
document.getElementById('date').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      console.log('enter pressed');
      app.main();
      // installInterval();
      return false;
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

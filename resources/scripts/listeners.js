document.addEventListener('DOMContentLoaded', function domOnLoad() {
  document.removeEventListener('DOMContentLoaded', domOnLoad, false);
  onDomReady();
},false);

window.addEventListener('load', function windowOnLoad() {
  window.removeEventListener('load', windowOnLoad, false);
  fadeWebPageIn();
},false);

function onDomReady() {
  var differenceInput = document.getElementById('difference');
  var dateInput = document.getElementById('date');
  dateInput.focus();
  differenceInput.disabled = true;
  differenceInput.classList.add('invisible');
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

function fadeWebPageIn() {
  document.body.classList.add('visible');
}

//Only needed when seconds are enabled
// function installInterval(userInput) {
//   if (userInput) {
//     setInterval(app.main, 1000);
//   }
// };

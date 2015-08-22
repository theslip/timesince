document.addEventListener('DOMContentLoaded', function domOnLoad() {
  document.removeEventListener('DOMContentLoaded', domOnLoad, false);
  onDomReady();
  fadeWebPageIn();
},false);

function onDomReady() {
  var differenceInputField = document.getElementById('difference');
  var dateInput = document.getElementById('date');

  dateInput.focus();
  differenceInputField.disabled = true;
  differenceInputField.classList.add('invisible');
  watchForEnterKeyOnDateInput(dateInput)
};

function watchForEnterKeyOnDateInput(userInput) {
  var app;

  userInput.onkeypress = function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode == '13') {
      app = new App();
      app.main();
    }
  }
};

function fadeWebPageIn() {
  document.body.classList.add('visible');
}

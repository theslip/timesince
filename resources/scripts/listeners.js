document.addEventListener('DOMContentLoaded', installListeners);

function installListeners () {
  document.getElementById('submit-btn').addEventListener('click', installInterval);
};

function installInterval () {
  var userInput = app.getTextFromElement('date');

  if (userInput) {
    setInterval(app.main, 1000);
  }
};

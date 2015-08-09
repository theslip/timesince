document.addEventListener('DOMContentLoaded', installListeners);

function installListeners () {
  document.getElementById('submit-btn').addEventListener('click', app.main)
};

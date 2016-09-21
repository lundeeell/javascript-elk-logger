# javascript-elk-logger
ELK setup for logging JavaScript

# Instructions
Start docker containers using docker-compose up

Add logging to your code, for example:

window.onerror = function (errorMsg, url, lineNumber) {
  $.post("http://192.168.99.100:5001/api/error", { url: url, lineNumber: lineNumber, errorMsg: errorMsg, time: Date.now });
}

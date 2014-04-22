function log (text) {
  document.getElementById('log').innerHTML += text + "\n";
}

function logStoredValue (key) {
  var value = sessionStorage.getItem(key);

  if (value) {
    log("Current value of " + key + ": '" + value + "'");
  } else {
    log("No value for " + key);
  }
}

function init() {
  var key = "test";

  document.getElementById('clear').addEventListener('click',
    function () {
      sessionStorage.removeItem(key);
      log("Cleared local storage entry for " + key);
      logStoredValue(key);
    }
  );
  
  document.getElementById('set').addEventListener('click',
    function () {
      var value = document.getElementById('value').value;
      sessionStorage.setItem(key, value);
      log("Set local storage entry for " + key + " to '" + value + "'");
      logStoredValue(key);
    }
  );
  
  log("Found " + sessionStorage.length + " keys in sessionStorage");
  logStoredValue(key);
}
function log (text) {
  document.getElementById('log').innerHTML += text + "\n";
}

function logStoredValue (key) {
  var value = localStorage.getItem(key);

  if (value) {
    log("Current value of " + key + ": '" + value + "'");
  } else {
    log("No value for " + key);
  }
}

function storageEvent (ev) {
  console.log('Storage event');
  log("Got a storage event for key '" + ev.key + "' from '" + ev.url + "'");
  if (ev.oldValue === null) {
    log("New Key / Value");
  } else if (ev.newValue === null) {
    log("Removed Key / Value");
  } else {
    log("Value changed");
  }
  logStoredValue(ev.key);
}

function init() {
  console.log('Setting up storage event listener');
  if (window.addEventListener) {
    window.addEventListener("storage", storageEvent, false);
  } else {
    window.attachEvent("onstorage", storageEvent);
  }
}
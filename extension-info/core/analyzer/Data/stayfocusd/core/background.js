"object" == typeof chrome.runtime && chrome.runtime.onInstalled.addListener(function(e) {
    window.onInstalledDetails = e
});
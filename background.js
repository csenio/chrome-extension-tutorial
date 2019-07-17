chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: "#ff8000" }, function() {
    console.log("The color is orange.");
  });
});

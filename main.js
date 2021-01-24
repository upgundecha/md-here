chrome.contextMenus.create ({
  "title": "Insert Markdown",
  "type": "normal",
  "contexts": ["editable"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (tab) {
      chrome.tabs.executeScript(tab.id, {file: "script.js"}); 
  }
})
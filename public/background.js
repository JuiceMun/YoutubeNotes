chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg === "open-side-panel") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        chrome.sidePanel.open({ windowId: tab.windowId });
    });
  }
});

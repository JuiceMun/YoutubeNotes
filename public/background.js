chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg === "open-side-panel") {
    const windowId = sender.tab?.windowId;

    if (windowId !== undefined) {
      chrome.sidePanel.open({ windowId });
    } else {
      chrome.windows.getCurrent({}, (win) => {
        chrome.sidePanel.open({ windowId: win.id });
      });
    }
  }
});

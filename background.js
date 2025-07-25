let activeTabId = null;
let activeStartTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await trackTime();
  activeTabId = activeInfo.tabId;
  activeStartTime = Date.now();
});

chrome.windows.onFocusChanged.addListener(async (windowId) => {
  await trackTime();
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    activeTabId = null;
    return;
  }
  const tab = await getActiveTab();
  if (tab) {
    activeTabId = tab.id;
    activeStartTime = Date.now();
  }
});

chrome.runtime.onStartup.addListener(() => {
  activeTabId = null;
  activeStartTime = null;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getTimeData") {
    chrome.storage.local.get(["timeData"], (result) => {
      sendResponse(result.timeData || {});
    });
    return true;
  }
});

// Helper Functions
async function trackTime() {
  if (activeTabId === null || activeStartTime === null) return;

  const tab = await chrome.tabs.get(activeTabId);
  const domain = new URL(tab.url).hostname;
  const endTime = Date.now();
  const duration = endTime - activeStartTime;

  chrome.storage.local.get(["timeData"], (result) => {
    const timeData = result.timeData || {};
    timeData[domain] = (timeData[domain] || 0) + duration;
    chrome.storage.local.set({ timeData });
  });

  activeStartTime = null;
}

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

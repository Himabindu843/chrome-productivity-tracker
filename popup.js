function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
}

function classify(domain) {
  const productive = ["leetcode.com", "github.com", "stackoverflow.com"];
  const unproductive = ["youtube.com", "facebook.com", "instagram.com"];
  
  if (productive.includes(domain)) return "Productive";
  if (unproductive.includes(domain)) return "Unproductive";
  return "Neutral";
}

function generateReport(timeData) {
  const reportDiv = document.getElementById("report");
  reportDiv.innerHTML = "";

  if (!timeData || Object.keys(timeData).length === 0) {
    reportDiv.textContent = "No data tracked yet.";
    return;
  }

  for (const [domain, time] of Object.entries(timeData)) {
    const type = classify(domain);
    const div = document.createElement("div");
    div.textContent = `${domain} - ${formatDuration(time)} - ${type}`;
    reportDiv.appendChild(div);
  }
}

document.getElementById("refreshBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "getTimeData" }, (response) => {
    generateReport(response);
  });
});

// Auto-load on open
chrome.runtime.sendMessage({ type: "getTimeData" }, (response) => {
  generateReport(response);
});

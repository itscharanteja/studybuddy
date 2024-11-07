// src/contentScript.js
document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage({ action: "TEXT_SELECTED", text: selectedText });
  }
});

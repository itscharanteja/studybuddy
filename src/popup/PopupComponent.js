// src/popup/PopupComponent.js
import React, { useState } from "react";

function Popup() {
  const [selectedText, setSelectedText] = useState("");
  const [result, setResult] = useState("");

  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "TEXT_SELECTED") {
      setSelectedText(message.text);
    }
  });

  const handleSummarize = async () => {
    // Dummy API call to simulate API integration
    const summary = `Summary of "${selectedText}"`;
    setResult(summary);
  };

  const handleGenerate = async () => {
    const generatedText = `Generated text based on "${selectedText}"`;
    setResult(generatedText);
  };

  const handleRephrase = async () => {
    const rephrasedText = `Rephrased: "${selectedText}"`;
    setResult(rephrasedText);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">StudyBuddy</h2>
      {selectedText && (
        <p>
          <strong>Selected Text:</strong> {selectedText}
        </p>
      )}

      <div className="space-y-2">
        <button onClick={handleSummarize} className="btn">
          Summarize
        </button>
        <button onClick={handleGenerate} className="btn">
          Generate
        </button>
        <button onClick={handleRephrase} className="btn">
          Rephrase
        </button>
      </div>

      {result && (
        <div className="mt-4">
          <h3 className="text-md font-bold">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Popup;

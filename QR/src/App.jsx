import { useState } from "react";
import GenerateQR from "./Components/GenerateQR";
import QRSavedList from "./Components/QRSavedList";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">QR Code Generator</h1>

        {/* Slider Tabs */}
        <div className="tab-slider">
          <div
            className={`tab ${activeTab === "generate" ? "active" : ""}`}
            onClick={() => setActiveTab("generate")}
          >
            Generate QR
          </div>
          <div
            className={`tab ${activeTab === "saved" ? "active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved QR
          </div>
          {/* Sliding underline */}
          <div
            className={`slider ${activeTab === "generate" ? "left" : "right"}`}
          />
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "generate" ? <GenerateQR /> : <QRSavedList />}
        </div>
      </div>
    </div>
  );
}

import {useState,useEffect} from "react"
import GenerateQR from "./Components/GenerateQR";
import QRSavedList from "./Components/QRSavedList";
import QRModal  from "./Components/QRModal";
import Footer from "./Components/Footer";
import "./App.css";

export default function App(){
  const[activeTab,setActiveTab]=useState("generate");
  const[savedQrs,setSavedQrs]=useState([]);
  const[selectedQr,setSelectedQr]=useState(null);

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem("savedQrs"))||[];
    setSavedQrs(stored);
  },[]);

  useEffect(()=>{
    localStorage.setItem("savedQrs",JSON.stringify(savedQrs));
  },[savedQrs]);

  const deleteQr = (id) => {
    setSavedQrs((prev) => prev.filter((qr) => qr.id !== id));
    setSelectedQr(null);
  };
  return (
    <div>
      <div className="page">
        <div className="card">
          <h1 className="title">QR Code Generator</h1>

        
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

            <div
              className={`slider ${
                activeTab === "generate" ? "left" : "right"
              }`}
            />
          </div>

        
          <div className="tab-content">
            {activeTab === "generate" ? (
              <GenerateQR
                savedQrs={savedQrs}
                setSavedQrs={setSavedQrs}
              />
            ) : (
              <QRSavedList
                savedQrs={savedQrs}
                onSelect={setSelectedQr}
              />
            )}
          </div>
        </div>

      
        <QRModal
          qr={selectedQr}
          onClose={() => setSelectedQr(null)}
          onDelete={deleteQr}
        />
        
      </div>
      <Footer/>
    </div>  
  

  );


}
import {useState} from "react";
import {QRCodeCanvas} from "qrcode.react"

export default function QRSavedList({savedQrs,onSelect}){
  const[searchTerm,setSearchTerm]=useState("");

  if(savedQrs.length===0){
    return<p style={{textAlign:"center"}}>No saved QR codes!</p>;
  }
  const filteredQrs=savedQrs.filter((qr)=>
    qr.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="saved-list-container">
      
      <input
        type="text"
        placeholder="Search by QR Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="qr-search"
      />

      <div className="saved-list">
        {filteredQrs.length === 0 && (
          <p style={{ textAlign: "center" }}>No QR codes match your search!</p>
        )}
        {filteredQrs.map((item) => (
          <div
            key={item.id}
            className="qr-card"
            onClick={() => onSelect(item)}
          >
            <QRCodeCanvas value={item.link} size={120} />
            <p>{item.name}</p>
            <p>{item.link}</p>
          </div>
        ))}
      </div>
    </div>
  );


}
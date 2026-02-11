import { useEffect,useState } from  "react";
import {QRCodeCanvas} from "qrcode.react";

export default function QRSavedList({onSelect}){
  const[savedQrs,setSavedQrs]=useState([]);

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem("savedQrs"))||[];
    setSavedQrs(stored);
  },[]);
  if(savedQrs.length===0){
    return <p style={{ textAlign: "center" }}>No saved QR codes</p>;

  }
  return (
    <div className="saved-list">
      {savedQrs.map((item) => (
        <div
          key={item.id}
          className="qr-card"
          onClick={() => onSelect(item)}
        >
          <QRCodeCanvas
            value={item.link}
            size={120}
            fgColor={item.options.fgColor}
            bgColor={item.options.bgColor}
          />

          <p className="qr-name">{item.name}</p>
          <p className="qr-link">{item.link}</p>
        </div>
      ))}
    </div>
  );

}
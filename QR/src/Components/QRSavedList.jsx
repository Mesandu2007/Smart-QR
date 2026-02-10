import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRSavedList() {
  const [savedQrs, setSavedQrs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedQrs")) || [];
    setSavedQrs(stored);
  }, []);

  if (savedQrs.length === 0) {
    return <p style={{ textAlign: "center" }}>No saved QR codes</p>;
  }

  return (
    <div className="saved-list">
      {savedQrs.map((item, index) => (
        <QRCodeCanvas
          key={index}
          value={item.qrData}
          size={120}
          fgColor={item.options.fgColor}
          bgColor={item.options.bgColor}
        />
      ))}
    </div>
  );
}

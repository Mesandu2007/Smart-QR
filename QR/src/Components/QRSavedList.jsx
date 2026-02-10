import { QRCodeCanvas } from "qrcode.react";

export default function QRSavedList({ savedQrs }) {
  if (!savedQrs.length) return null;

  return (
    <div className="card">
      <h2>Saved QR Codes</h2>
      <div className="saved-grid">
        {savedQrs.map((qr, index) => (
          <QRCodeCanvas
            key={index}
            value={qr.qrData}
            size={100}
            bgColor={qr.options.bgColor}
            fgColor={qr.options.fgColor}
          />
        ))}
      </div>
    </div>
  );
}

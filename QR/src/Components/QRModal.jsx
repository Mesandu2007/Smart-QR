import { QRCodeCanvas } from "qrcode.react";

export default function QRModal({ qr, onClose, onDelete }) {
  if (!qr){
    return null;

  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{qr.name || "QR Code"}</h2>

        <QRCodeCanvas
          value={qr.link}
          size={240}
          fgColor={qr.options.fgColor}
          bgColor={qr.options.bgColor}
        />

        <p className="modal-link">{qr.link}</p>

        <div className="modal-actions">
          <button onClick={() => navigator.clipboard.writeText(qr.link)}>
            Copy Link
          </button>

          <button onClick={() => onDelete(qr.id)} className="danger">
            Delete
          </button>

          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

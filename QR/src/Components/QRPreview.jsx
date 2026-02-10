import { QRCodeCanvas } from "qrcode.react";

export default function QRPreview({ qrData, options, onSave }) {
  const downloadQR = () => {
    const canvas = document.getElementById("qr-canvas");
    const url = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png";
    a.click();
  };

  const copyQR = async () => {
    const canvas = document.getElementById("qr-canvas");
    const blob = await new Promise((res) => canvas.toBlob(res));
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob }),
    ]);
    alert("QR copied to clipboard!");
  };

  if (!qrData) return null;

  return (
    <div className="card center">
      <QRCodeCanvas
        id="qr-canvas"
        value={qrData}
        size={options.size}
        bgColor={options.bgColor}
        fgColor={options.fgColor}
      />

      <div className="actions">
        <button onClick={downloadQR}>⬇ Download</button>
        <button onClick={copyQR}>📋 Copy</button>
        <button onClick={onSave}>💾 Save</button>
      </div>
    </div>
  );
}

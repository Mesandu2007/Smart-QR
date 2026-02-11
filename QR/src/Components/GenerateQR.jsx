import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function GenerateQR() {
  const [qrData, setQrData] = useState("");
  const [savedQrs, setSavedQrs] = useState([]);
  const[fileType,setFileType]=useState("png");
  const[qrName,setQrName]=useState("");

  const [options, setOptions] = useState({
    size: 200,
    fgColor: "#000000",
    bgColor: "#ffffff",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedQrs")) || [];
    setSavedQrs(stored);
  }, []);

  const saveQr = () => {
    if(! qrData || !qrName){
      alert("Please Enter both QR Name and Data");
      return;
    }
    const newQr={
      id:Date.now(),
      name:qrName,
      link: qrData,
      options
    };
    const updated=[...savedQrs,newQr];
    setSavedQrs(updated);
    localStorage.setItem("savedQrs", JSON.stringify(updated));
    setQrName("");

    
  };
  const downloadQR = () => {
    const canvas = document.getElementById("qr-canvas");
    const mimeType = `image/${fileType}`; // "image/png", "image/jpeg", etc.
    const url = canvas.toDataURL(mimeType);

    const a = document.createElement("a");
    a.href = url;
    a.download = `qr-code.${fileType}`;
    a.click();
  };


  

  const copyQR = async () => {
    const canvas = document.getElementById("qr-canvas");
    const blob = await new Promise((res) => canvas.toBlob(res));
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob }),
    ]);
    alert("QR copied!");
  };

  return (
    <div className="qr-form">
      <input
        type="text"
        placeholder="QR Name (e.g. My Website)"
        value={qrName}
        onChange={(e)=>setQrName(e.target.value)}
        className="qr-textarea"
      />  

      <textarea
        className="qr-textarea"
        placeholder="Enter text or URL"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
      />

      <div className="options">
        <label className="n1">
          Size
          <select
            value={options.size}
            onChange={(e) =>
              setOptions({ ...options, size: Number(e.target.value) })
            }
          >
            <option value={150}>150 × 150</option>
            <option value={200}>200 × 200</option>
            <option value={250}>250 × 250</option>
          </select>
        </label>

        <label className="n1">
          Foreground
          <input
            type="color"
            value={options.fgColor}
            onChange={(e) =>
              setOptions({ ...options, fgColor: e.target.value })
            }
          />
        </label>

        <label className="n1">
          Background
          <input
            type="color"
            value={options.bgColor}
            onChange={(e) =>
              setOptions({ ...options, bgColor: e.target.value })
            }
          />
        </label>
        <label className="n1">
          Download as:
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="WEBP">WEBP</option>
          </select>  

        </label>
      </div>


      {qrData && (
        <div className="preview">
          <QRCodeCanvas
            id="qr-canvas"
            value={qrData}
            size={options.size}
            fgColor={options.fgColor}
            bgColor={options.bgColor}
          />
        </div>
      )}

      <div className="actions">
        <button onClick={downloadQR} className="bt1">Download</button>
        <button onClick={copyQR} className="bt2">Copy</button>
        <button onClick={saveQr} className="bt3">Save</button>
      </div>
    </div>
  );
}

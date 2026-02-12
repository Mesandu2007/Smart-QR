export default function QRSavedList({savedQrs,onSelect}){
  if(savedQrs.length===0){
    return <p style={{textAlign: "center"}}>No saved QR codes!</p>;
  }
  
  return(
    <div className="saved-list">
      {savedQrs.map((item) => (
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
  );
}
export default function QRForm({setQrData, options,setOptions}){
    return(
        <div className="card">
            <input
              type="text"
              placeholder="Enter text or URL"
              onChange={(e)=> setQrData(e.target.value)}
            /> 
            <label>Size</label>
            <input
              type="range"
              min="100"
              max="300"
              value={options.size}
              onChange={(e)=>setOptions({...options, size: Number(e.target.value)})} 
            />
            <label>Background Color</label>
            <input
              type="color"
              value={options.bgColor}
              onChange={(e)=> setOptions({...options,bgColor: e.target.value})} 
            />
            <label>Foreground Color</label>
            <input
                type="color"
                value={options.fgColor}
                onChange={(e) =>
                setOptions({ ...options, fgColor: e.target.value })
                }
            />   
        </div>
        

    );

}
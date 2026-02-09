export default function QRForm({setQrData, options,setOptions}){
    return(
        <div className="card">
            <input
              type="text"
              placeholder="Enter text or URL"
              onChange={(e)=> setQrData(e.target.value)}
            /> 
        </div>
    )

}
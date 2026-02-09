import {useState, useEffect} from "react";
import QRForm from "./Components/QRForm";
import QRPreview from "./Components/QRPreview";
import QRSavedList from "./Components/QRSavedList";
import "./App.css"

export default function App(){
  const[qrData, setQrData]=useState("");
  const[options,setOptions]=useState({
    size:200,
    bgColor:"#ffffff",
    fgColor:"#000000",

  });
  const[savedQrs,setSavedQrs]=useState([]);

  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem("savedQrs"))||[];
    setSavedQrs(stored);

  },[]);
  const saveQr=()=>{
    if(!qrData){
      return;
    }
    const newList=[...savedQrs,{qrData,options}];
    setSavedQrs(newList);
    localStorage.setItem("savedQrs",JSON.stringify(newList));
  };
  return(
    <div className="app">
      <h1>QR Code Generator</h1>
      <QRForm setQrData={setQrData} options={options} setOptions={setOptions}/>
      <QRPreview qrData={qrData} options={options} onSave={saveQr}/>
      <QRSavedList savedQrs={savedQrs}/>


    </div>
  );  






}





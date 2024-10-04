import { useState } from "react";
import ReactDOM from "react-dom/client";
import '../css/qrcode.css'

function Qrcode(){
  const [img,setImg]=useState("")
  const [qrdata,setQrdata]=useState('')
  const [qrsize,setQrsize]=useState('150')


  async function generateqr(){
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${qrdata}`
    setImg(url)
  }
   const date=new Date()
   const year=date.getFullYear();
    return(
       <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
    
        {img && <img className="qr-img" src={img} alt="" />}
        <div>
        <label htmlFor="dataInput" className="inputlabel">Data for QR Code </label>
        <input type="text" id="dataInput" placeholder="Enter data for QR code" onChange={(e)=>setQrdata(e.target.value)}/>

        <label htmlFor="sizeInput" className="inputlabel">Image size (e.g., 150): </label>
        <input type="text"  id="sizeInput"  placeholder="Enter image size" onChange={(e)=>setQrsize(e.target.value)}/>

        <button className="generate-btn"  onClick={generateqr}>Generate QR code</button>
        <button className="download-btn">Download QR code</button>
        </div>
        <p className="footer">
            Designed by <a href="">Sachin Albert</a>
            </p>
            <p>All Copyrights &copy; {year} reserved 
            </p>
       </div>

       
    )
}
export default Qrcode;

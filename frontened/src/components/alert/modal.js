import React from "react";
import sign from "./tick.png"
import "./modal.css";
import { useNavigate } from "react-router-dom"
function AlertPopUp() {
  const navigate=useNavigate();
  const CheckAllOrder=()=>{
    navigate("/history")
  }
  return (
    <div className="modal">
    <div  className="overlay"></div>
    <div className="modal-content">
        <div className="header">
          <img src={sign}></img>
          <h1>Your order is Successfully </h1>
        </div>
        <div className="body">
          You can track the delivery in the "Orders" section
        </div>
        <div className="footer">
          <button onClick={CheckAllOrder}>Go to orders</button>
        </div>
      </div>
    </div>  
   
  );
}

export default AlertPopUp;
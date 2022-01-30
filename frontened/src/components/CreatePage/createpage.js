
import "./createpage.css"
import home from './home.jpg';
import list from "./list.jpg"
import line from './plus.png';

import { useNavigate } from "react-router-dom"
import { useState } from "react";
export default function CreatePage() {
    const [colr,setcolr]=useState("btn")
    const navigate = useNavigate();
    const Home=()=>{
        setcolr("btn2")
        navigate("/")

    }
    const Past=()=>{
        navigate("/history")
    }
    const Productlist=()=>{
        navigate("/productlist")
    }
    
    return (

        <div className="main">
            {/* -------------------------header=-------------------------------------------- */}
            <div className="box1">
                <div className="box11">LAUNDRY</div>
                <div className="box12">
                    <button className="box122">Pricing</button>
                    <button className="box122">Career</button>
                    <button className="box1221">User Name</button>
                </div>
            </div>

            {/* ------------------------------body---------------------------------- */}
            <div className="box2">
                <div className="box21">
                    <button className={colr}  onClick={Home}><img className="image1" src={home} alt="home"></img></button>
                    <button className={colr} onClick={Productlist} ><img className="image2" src={line} alt="plus"></img></button>
                    <button className={colr}  onClick={Past}><img className="image1" src={list} alt="line"></img></button>
                </div>
                <div className="box22">
                        <p className="order-number"> Order|</p>
                        <button onClick={Productlist} className="create2">Create New Order</button>
                </div>

            </div>
            {/* ---------------------------------footer------------------------------------- */}

            <div className="box3">
                <p>2021 &copy; laundry</p>
            </div>




        </div>
    )
            
           
  
}
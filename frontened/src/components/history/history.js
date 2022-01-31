
import "./history.css";
import home from './home.jpg';
import list from "./list.jpg"
import line from './plus.png';
import view from './view.png';
import axios from "axios";
import { useEffect, useState } from "react";
export default function ProductList() {
    const [details, setDetail] = useState([{

  
        "user":"",
        "orderTime":"",
        "productlist":[],
        "totalprice":0,
        "totalitems":0,
        "status":""



    }])
    const mytoken = localStorage.getItem('SavedToken');

    useEffect(() => {
        axios({
            url: "http://localhost:9002/orders",
            method: "GET",
            headers: {
                authorization: mytoken,
            }
        }).then(response => console.log("xcvgbhnj",response.data.content))
    }, []);
    console.log("get in order:  ", details)

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
                    <button class="btn"><img className="image1" src={home} alt="home"></img></button>
                    <button class="btn"><img className="image2" src={line} alt="plus"></img></button>
                    <button class="btn"><img className="image1" src={list} alt="line"></img></button>
                </div>
                <div className="box22">
                    <div className="box221">
                        <p> Create Order</p>
                    </div>

                    <div className="box222">
                        <table>
                            <tr>
                                <th>OrderID</th>
                                <th>Date</th>
                                <th>Store Location</th>
                                <th>City</th>
                                <th>Phone Number</th>
                                <th>Total Items</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>view</th>

                            </tr>
                    
                            {details.map((element, i)=>{
                                return(
                                    <tr>
                                    <td>OR00{i+1}</td>
                                    <td>{element.orderTime} </td>
                                    <td>JP Nagar</td>
                                    <td>Bangalore</td>
                                    <td>+919988776655</td>
                                    <td>{element.totalitems}</td>
                                    <td>{element.totalprice}</td>
                                    <td>{element.status}</td>
                                    <td><input className="view" type="image" src={view} /></td>

                                </tr>
                                )
                                
                                })}
                           
                        </table>


                    </div>
                    <div className="box223">
                        <button className="create">Create</button>

                    </div>

                </div>

            </div>
            {/* ---------------------------------footer------------------------------------- */}

            <div className="box3">
                <p>2021 &copy; laundry</p>
            </div>




        </div>
    )
}
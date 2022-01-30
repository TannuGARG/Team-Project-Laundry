
import "./product.css";
import home from './home.jpg';
import list from "./list.jpg"
import line from './plus.png';
import wash from './wash.jpg';
import press from './iron.jpg';
import towel from './towel.jpg';
import bag from './pack.jpg';
import photo1 from "./img1.jpg"
import photo2 from "./img2.jpg"
import photo3 from "./img3.jpg"
import photo4 from "./img4.jpg"
import photo5 from "./img5.jpg"
import photo6 from "./img6.jpg"
import photo7 from "./img7.jpg"

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ProductList() {
    const navigate = useNavigate();
    const [totalbill, setBill] = useState(0)
    const [totalitems, setItem] = useState(0)
    const [price, setPrice] = useState({
        "shirt": 0,
        "tshirt": 0,
        "trouser": 0,
        "jean": 0,
        "jogger": 0,
        "boxer": 0,
        "other": 0
    });

    const [shirt, setShirt] = useState([false, false, false, false]);
    const [tshirt, setTshirt] = useState([false, false, false, false]);
    const [trouser, setTrouser] = useState([false, false, false, false]);
    const [jean, setJean] = useState([false, false, false, false]);
    const [jogger, setJogger] = useState([false, false, false, false]);
    const [boxer, setBoxer] = useState([false, false, false, false]);
    const [other, setOther] = useState([false, false, false, false]);

    const ServiceWashShirt = (ind) => {
        const newArr = shirt
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setShirt(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "shirt": val
        })

    }


    const ServiceWashTshirt = (ind) => {
        const newArr = tshirt
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setTshirt(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "tshirt": val
        })
    }
    const ServiceWashTrouser = (ind) => {
        const newArr = trouser
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setTrouser(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "trouser": val
        })
    }
    const ServiceWashJean = (ind) => {
        const newArr = jean
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setJean(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "jean": val
        })
    }
    const ServiceWashJogger = (ind) => {
        const newArr = jogger
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setJogger(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "jogger": val
        })
    }
    const ServiceWashBoxer = (ind) => {
        const newArr = boxer
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setBoxer(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "boxer": val
        })
    }
    const ServiceWashOther = (ind) => {
        const newArr = other
        if (newArr[ind] === true) {
            newArr[ind] = false
        } else {
            newArr[ind] = true
        }
        setOther(newArr)
        console.log(newArr)
        const val = calculate(newArr)
        setPrice({
            ...price,
            "other": val
        })
    }
    const calculate = (arr) => {

        var cost = 0
        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                if (arr[i] === true) {
                    cost += 20
                }
            } else if (i == 1) {
                if (arr[i] === true) {
                    cost += 15
                }
            } else if (i == 2) {
                if (arr[i] === true) {
                    cost += 10
                }
            } else {
                if (arr[i] === true) {
                    cost += 25
                }

            }
        }


        return cost
    }











    const [User, setUser] = useState({
        "shirt": 0,
        "tshirt": 0,
        "trouser": 0,
        "jean": 0,
        "jogger": 0,
        "boxer": 0,
        "other": 0
    })

    const handler = (e) => {

        const { name, value } = e.target

        setUser({
            ...User,
            [name]: value
        })
    }
    const Counthandler = () => {
        const mytoken = localStorage.getItem('SavedToken');
        setItem(parseFloat(User.shirt) + parseFloat(User.tshirt) + parseFloat(User.trouser) + parseFloat(User.jean) + parseFloat(User.jogger) + parseFloat(User.boxer) + parseFloat(User.other));
        console.log("final item", totalitems)
        var bill = 0
        console.log(price)
        for (const [key, value] of Object.entries(price)) {
            bill += parseFloat(value * User[key])
            setBill(bill)
            console.log("final", totalbill)
        }
        console.log(mytoken)
        console.log(price)
        var today = new Date()
        console.log("date",today)
        const services=[];
        for (const [key, value] of Object.entries(User)) {
            var KEY=key
            var person={}
            if(User[KEY]!==0){
                person.producttype=KEY;
                person.quantity=User[KEY];
                person.price=price[KEY];
                if(KEY=="shirt"){
                    person.services=shirt

                }else if(KEY=="tshirt"){
                    person.services=tshirt

                }else if(KEY=="jean"){
                    person.services=jean

                }else if(KEY=="trouser"){
                    person.services=trouser

                }else if(KEY=="boxer"){
                    person.services=boxer

                }else if(KEY=="jogger"){
                    person.services=jogger

                }else{
                    person.services=other
                }
                

            console.log("array",person)
            services.push(person)
            console.log(services)
            console.log("bill",totalbill)
            console.log("items",totalitems)
            } 
          }
        axios({
            url:"http://localhost:9002/orders",
            method:"POST",
            headers:{
                authorization:mytoken,
            },
            data:{
                "totalprice": totalbill, "totalitems": totalitems,"date":today,"status":"done ordered successfully","services":services
            }
           
           
            

        }) 
            
        .then(res => {
            alert(res.data.status)
        })
    }
    const clearItem = (item) => {
        if (item === "shirt") {
            const newSelection = [false, false, false, false];
            setShirt(newSelection)
            User.shirt = 0;
            price.shirt = 0;
        } else if (item === "tshirt") {
            const newSelection = [false, false, false, false];
            setTshirt(newSelection)
            User.tshirt = 0;
            price.tshirt = 0;
        } else if (item === "trouser") {
            const newSelection = [false, false, false, false];
            setTrouser(newSelection)
            User.trouser = 0;
            price.trouser = 0;
        } else if (item === "jean") {
            const newSelection = [false, false, false, false];
            setJean(newSelection)
            User.jean = 0;
            price.jean = 0;

        } else if (item === "jogger") {
            const newSelection = [false, false, false, false];
            setJogger(newSelection)
            User.jogger = 0;
            price.jogger = 0;

        } else if (item === "boxer") {
            const newSelection = [false, false, false, false];
            setBoxer(newSelection)
            User.boxer = 0;
            price.boxer = 0;

        } else {
            const newSelection = [false, false, false, false];
            setOther(newSelection)
            User.other = 0;
            price.other = 0;

        }
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
                                <th>Product Type</th>
                                <th>Quantity</th>
                                <th>Wash-Type</th>
                                <th>Price</th>
                                <th></th>

                            </tr>
                            <tr>
                                {/* <td>Shirt</td> */}
                                <td>
                                <div className="show">
                                    <img className="new" src={photo1}></img>
                                    <p>Shirt</p>
                                

                                </div>
                                </td>
                                <td>
                                    <input className="quan" name="shirt" type={Number} value={User.shirt} onChange={handler}></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={shirt[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashShirt(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={shirt[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashShirt(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={shirt[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashShirt(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={shirt[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashShirt(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>
                                {User.shirt && price.shirt ?
                                    <td>{price.shirt}*{User.shirt}={price.shirt * User.shirt}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("shirt")}  >RESET</button></td>
                            </tr>
                            <tr>
                                
                                <td>
                                <div className="show">
                                    <img className="new" src={photo2}></img>
                                    <p>T-Shirt</p>
                                

                                </div>
                                </td>
                                <td>
                                    <input className="quan" name="tshirt" type={Number} value={User.tshirt} onChange={handler} ></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={tshirt[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTshirt(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={tshirt[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTshirt(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={tshirt[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTshirt(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={tshirt[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTshirt(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>

                                {User.tshirt && price.tshirt ?
                                    <td>{price.tshirt}*{User.tshirt}={price.tshirt * User.tshirt}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("tshirt")}  >RESET</button></td>
                            </tr>
                            <tr>
                                
                                <td>
                                <div className="show">
                                    <img className="new" src={photo3}></img>
                                    <p>Trousers</p>
                                

                                </div>
                                </td>
                                
                                <td>
                                    <input className="quan" name="trouser" type={Number} value={User.trouser} onChange={handler}></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={trouser[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTrouser(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={trouser[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTrouser(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={trouser[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTrouser(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={trouser[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashTrouser(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>

                                {User.trouser && price.trouser ?
                                    <td>{price.trouser}*{User.trouser}={price.trouser * User.trouser}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("trouser")}  >RESET</button></td>
                            </tr>
                            <tr>
                               
                                <td>
                                <div className="show">
                                    <img className="new" src={photo4}></img>
                                    <p>Jean</p>
                                

                                </div>
                                </td>
                                <td>
                                    <input className="quan" name="jean" type={Number} value={User.jean} onChange={handler}></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={jean[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJean(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={jean[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJean(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={jean[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJean(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={jean[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJean(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>

                                {User.jean && price.jean ?
                                    <td>{price.jean}*{User.jean}={price.jean * User.jean}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("jean")}  >RESET</button></td>
                            </tr>
                            <tr>
                               
                                <td>
                                <div className="show">
                                    <img className="new" src={photo5}></img>
                                    <p>Jogger</p>
                                

                                </div>
                                </td>
                                <td>
                                    <input className="quan" name="jogger" type={Number} value={User.jogger} onChange={handler}></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={jogger[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJogger(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={jogger[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJogger(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={jogger[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJogger(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={jogger[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashJogger(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>

                                {User.jogger && price.jogger ?
                                    <td>{price.jogger}*{User.jogger}={price.jogger * User.jogger}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("jogger")}  >RESET</button></td>
                            </tr>
                            <tr>
                                
                                <td>
                                <div className="show">
                                    <img className="new" src={photo6}></img>
                                    <p>Boxers</p>
                                

                                </div>
                                </td>
                                <td>
                                    <input className="quan" name="boxer" type={Number} value={User.boxer} onChange={handler}></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={boxer[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashBoxer(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={boxer[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashBoxer(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={boxer[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashBoxer(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={boxer[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashBoxer(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>

                                {User.boxer && price.boxer ?
                                    <td>{price.boxer}*{User.boxer}={price.boxer * User.boxer}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("boxer")}  >RESET</button></td>
                            </tr>
                            <tr>
                               
                                <td>
                                <div className="show">
                                    <img className="new" src={photo7}></img>
                                    <p>Others</p>
                                

                                </div>
                                </td>
                                <td>
                                    <input className="quan" name="other" type={Number} value={User.other} onChange={handler} ></input>
                                </td>
                                <td>
                                    <div className="items">
                                        <button className="cont" style={other[0] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashOther(0)}><img className="pic" src={wash} alt="home"></img></button>
                                        <button className="cont" style={other[1] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashOther(1)}><img className="pic" src={press} alt="home"></img></button>
                                        <button className="cont" style={other[2] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashOther(2)} ><img className="pic" src={towel} alt="home"></img></button>
                                        <button className="cont" style={other[3] === true ? { backgroundColor: "blue" } : null} onClick={() => ServiceWashOther(3)} ><img className="pic" src={bag} alt="home"></img></button>
                                    </div>

                                </td>

                                {User.other && price.other ?
                                    <td>{price.other}*{User.other}={price.other * User.other}</td> :
                                    <td>--</td>}

                                <td><button className="reset" onClick={() => clearItem("other")}  >RESET</button></td>
                            </tr>
                        </table>


                    </div>
                    <div className="box223">
                        <button className="create" onClick={()=>{navigate("/history")}}>Create</button>
                        <button className=" create" onClick={Counthandler}>Proceed</button>
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

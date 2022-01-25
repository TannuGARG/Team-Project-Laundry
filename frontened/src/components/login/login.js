import React, { useState } from "react"
import "./login.css"
import fb from "./fb.png"
import insta from "./insta.png"
import link from "./link.png"
//import lock from "./lock.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function LoginPage({ setLoginUser }) {

    const navigate = useNavigate();
    const [User, setUser] = useState({
        Email: "",
        Password: ""
    })
    const handler = (e) => {
        const { name, value } = e.target
        setUser({
            ...User,
            [name]: value
        })
    }
    const handleLogin = (e) => {
        axios.post("http://localhost:9002/login", User)
            .then(res => {
                alert(res.data.message)

                if (res.data.message === "Login Successfully") {
                    alert(res.data.jwttoken)
                    const token = res.data.jwttoken;
                    localStorage.setItem("SavedToken", token);
                    setLoginUser(res.data.user);
                    navigate("/createpage")
                }
            })
    }
    return (
        <div className='main-page-container'>
            <div id="header-section-container" className='header-section-container'>
                <span className='app-header-label'>{'LAUNDRY'}</span>
                <div id="right-side-container" className='header-right-side-section'>
                    <button id="home-btn" className='main-header-btn'>{'Home'}</button>
                    <button id="pricing-btn" className='main-header-btn'>{'Pricing'}</button>
                    <button id="career-btn" className='main-header-btn'>{'Career'}</button>
                    <button id="signin-btn" className='main-header-btn'>{'Sign in'}</button>
                </div>
            </div>
            <div id="panel-container-id" className='panel-containers'>
                <div id="right-side-panel" className="main-panel">
                    <div id='right-panel-contents'>
                        <h1 id="heading">Laundry Service</h1><br/>
                        <p id='heading_2'> Doorstep wash and Dryclean Serivce</p>
                        <p id="heading_3">Don't have an account?</p>
                        <div id='Box-1'><button id="register_btn" className='main-header-btn'>{'Register'}</button></div>
                    </div>
                </div>
                <div id="left-side-panel" className="main-panel">

                    <div id='signin_box'><><h1 id='sing'>SIGN IN</h1></>
                        <form>
                            <label>
                                <input className="input" type="text" name="name" placeholder='Mobile / Email' />
                            </label> <br></br> <br></br>
                            <label>
                                <input type="password" className="input" name="name" placeholder='Password'/>  
                            </label>
                            <p id='forgot'>forgot Password?</p>
                             <br></br>
                            <input className="submit" type="submit" value="Sign-In" />
                        </form>
                        </div>

                </div>
            </div>
            <hr></hr>
            <div className="colr">
            <div id="foot-note" className="footnote">
                <h3>Now Refer and earn 500Rs for evry referal*</h3>
                <p> *Terms and conditions to be applied</p>
            </div>
            <div>
                <footer className="row">
                    <div className="col1">
                        <h5>ABOUT US</h5>
                        <p>Doorstep wash and delivery</p>
                    </div>
                    <div className="col2">
                        <h5>Home</h5>
                        <p>SignIn</p>
                        <p>Register</p>
                    </div>
                    <div className="col3">
                        <h5>Pricing</h5>
                    </div>
                    <div className="col4">
                        <h5>Career</h5>
                        <p>Blogs</p>
                        <p>Create</p>
                    </div>

                    <div className="col5">
                        <h5>Contact</h5>
                    </div>
                    <div className="col6">
                        <h5>Social Media</h5>
                        <div className="social">
                            <img className="image1" src={fb} alt="home"></img>
                            <img className="image1" src={link} alt="home"></img>
                            <img className="image1" src={insta} alt="home"></img>
                        </div>
                       
                    </div>
                </footer>
            </div>

            </div>
        </div>
    )
}
import React, { useState } from "react"
import fb from "./fb.png"
import insta from "./insta.png"
import link from "./link.png"
import "./register.css";
import validator from 'validator'
import axios from "axios";
import { useNavigate } from "react-router-dom"
export default function RegisterPage() {
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate()
    const [user, setUser] = useState({
        Name: "",
        Phone: "",
        District: "",
        Address: "",
        Pincode: "",
        Email: "",
        State: "",
        Password: ""


    })
    const handler = (e) => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })


    }
    const DoLogin = () => {
        navigate("/")
    }
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('Valid Email')
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value

            })

        } else {
            setEmailError('Enter valid Email!')
        }
    }


    const RegsiteredYourself = (e) => {
        console.log(user)
        if (user) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.status)
                    if (res.data.status === "Successfully registered") {
                        navigate("/")

                    }

                })


        } else {
            alert("Invalid Information")
        }


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
                        <h1 id="heading">Laundry Service</h1><br />
                        <p id='heading_2'> Doorstep wash and Dryclean Serivce</p>
                        <p className="dev">Don't have an account?</p>
                        <button onClick={DoLogin} className="submit2">Login</button>
                    </div>
                </div>
                <div id="left-side-panel1" className="main-panel">

                    <div id='Register_box'><h1 id='reg'>REGISTER</h1>
                       
                            <div id='reg_box'>
                                <input className="take" type="text" name="Name" placeholder='Name' value={user.Name} onChange={handler} size="30" />
                                <input className="take" type="text" name="Email" placeholder='Email' value={user.Email} onChange={handler} size="30" />
                               

                            </div>
                            <div id='reg_box'>
                                <input className="take" type="text" name="Phone" placeholder='Phone' value={user.Phone} onChange={handler} size="30" />
                                <input className="take" type="text" name="State" placeholder='State' value={user.State} onChange={handler} size="30" />
                            </div>
                            <div id='reg_box'>
                                <input type="text" className="take" name="District" placeholder='District' value={user.District} onChange={handler} size="30" />
                                <input type="text" className="take" name="Address" placeholder='Address' value={user.Address} onChange={handler} size="30" />
                            </div>
                            <div id='reg_box'>
                                <input type="text" className="take" name="Pincode" placeholder='Pincode' value={user.Pincode} onChange={handler} size="30" />
                                <input type="password" className="take" name="Password" placeholder='Password' value={user.Password} onChange={handler} size="30" />
                            </div>

                            <button className="submit3" onClick={RegsiteredYourself} >Register</button>
                        
                    </div>

                </div>
            </div>
            <div className="colr">
                <div id="foot-note" className="footnote">
                    <hr></hr>
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
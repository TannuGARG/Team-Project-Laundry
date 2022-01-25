import React, { useState } from "react"
import "./register.css";
import validator from 'validator'
import axios from "axios";
import {useNavigate} from "react-router-dom"
export default function RegisterPage(){
    const [emailError, setEmailError] = useState('')
    const navigate=useNavigate()
    const [user,setUser]=useState({
        Name:"",
        Phone:"",
        District:"",
        Pincode:"",
        Email:"",
        State:"",
        Password:""
        

    })
    const handler=(e)=>{
        console.log(e.target)
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value

        })
        

    }
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
          setEmailError('Valid Email :)')
        } else {
          setEmailError('Enter valid Email!')
        }
      }

    const RegsiteredYourself=(e)=>{
        const {name,email,password,Repassword}=user;
        console.log(user)
        if(name && email &&password && password===Repassword){
            alert(name,password)
            axios.post("http://localhost:9002/register",user)
            .then(res=>{
                alert(res.data.message)
                navigate("/login")
                
            })
            

        }else{
            alert("Invalid Information")
        }
        

    }
    return(
        <div className="main">
            {console.log("user",user)}
            <h1>Register</h1>
           <input type="text" name="name" value={user.name} onChange={handler} placeholder="Enter your Name"></input> <br></br> <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
           <input type="text" name="email" value={user.Email} onChange={handler} onChange={validateEmail} placeholder="Enter your Email"></input> <br></br> 
           <input type="password" name="password" value={user.password} onChange={handler} placeholder="Enter your Password"></input><br></br>
           <input type="password" name="Repassword" value={user.Repassword} onChange={handler} placeholder="Confirm Password"></input><br></br> 
           <button className="btn" onClick={()=>navigate("/login")}>Login</button>  
           <div>or</div>  
           <button className="btn" onClick={RegsiteredYourself}>Register</button>  

           
        </div>
    )
}
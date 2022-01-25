
import "./createpage.css"

import { useNavigate } from "react-router-dom"
export default function CreatePage(){
    const navigate=useNavigate();
    const handleDisplay=(e)=>{
       navigate("/productlist")
        }

    return(
        <div className="main">
            
           
        </div>
    )
}
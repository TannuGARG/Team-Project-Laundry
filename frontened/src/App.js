import "./App.css"
import LoginPage from "./components/login/login"
// import RegisterPage from "./components/register/register";
//import ProductList from  "./components/productlist/product";
//import CreatePage from  "./components/CreatePage/createpage";

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
//import React, { useState } from 'react';

function App() {
  //const [user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
        <Routes >
            {/* <Route path="/productlist" element={<ProductList/>}/> */}
            {/* {/* {
              user && user._id? <Route exact path="/" element={<CreatePage />}/> : <Route  path="/" element={<LoginPage setLoginUser={setLoginUser}/>}/>  

            } */}
         
          <Route  path="/login" element={<LoginPage/>}> </Route>
          {/* <Route  path="/register" element={<RegisterPage />}/>  */} 
        
          {/* <Route path="/createpage" element={<CreatePage/>}/> */}
          
        </Routes>

      </Router>
     
    
     
    </div>
  );
}

export default App;

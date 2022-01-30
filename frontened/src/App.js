import "./App.css"
import LoginPage from "./components/login/login"
import RegisterPage from "./components/register/register";
import ProductList from  "./components/productlist/product";
import PastOrder from  "./components/history/history";
import CreatePage from  "./components/CreatePage/createpage";
import Summary from "./components/summary/summary"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React, { useState } from 'react';
import Modal from "./components/modal/modal";
function App() {
  const [user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
        <Routes >
            <Route path="/summary" element={<Summary />}/>
            <Route path="/productlist" element={<ProductList/>}/>
            <Route path="/history" element={<PastOrder />}/>
            {/* {
              user && user._id? <Route exact path="/createpage" element={<CreatePage />}/> : <Route  path="/login" element={<LoginPage setLoginUser={setLoginUser}/>}/>  

            } */}
         
          <Route  exact path="/" element={<LoginPage setLoginUser={setLoginUser}/>}> </Route>
          <Route  path="/register" element={<RegisterPage />}/>
          <Route path="/createpage" element={<CreatePage/>}/>
          <Route path="/modal" element={<Modal/>}/>

          
        </Routes>

      </Router>
     
    
     
    </div>
  );
}

export default App;

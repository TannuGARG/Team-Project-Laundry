
require('dotenv').config();
const express = require("express");
const cors = require("cors")
const jwt = require('jsonwebtoken');
const connectdB = require("./config/db")
const app = express();
const UserDetail = require("./models/user");

app.use(cors());
connectdB();
const loginroute = require("./route/login");
const registerroute = require("./route/register");
const orderroute = require("./route/order")
const secret = "mynameistamannafrom10xacademy"
app.use("/orders", async (req, res, next) => {
    
    
   

    try {
       
        const token = req.headers.authorization;
       
      
        if (!token) {
            return res.json({
                status: "failed",
                message: "Invalid Authorization"

            })
        } else {
          
            try {
                var decoded = jwt.verify(token, secret);
                req.user = decoded.Email;
                user1= await UserDetail.findOne({Email:decoded.Email})
                req.user=user1._id
               

            } catch (err) {
                console.log(err)
            }


        }


    } catch (err) {
        res.json({
            status: "failed",
            message: err.message
        })
    }
    next();
})
app.use("/login", loginroute)
app.use("/register", registerroute)
app.use("/orders", orderroute)
const port = process.env.PORT || 9002;
app.listen(port, () => {
    console.log(`server running at port ${port}`)

})








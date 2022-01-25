
const express = require("express");
//const cors = require("cors")
const connectdB=require("./config/db")
const app = express();
//app.use(cors());
connectdB();
const loginroute=require("./route/login");
const registerroute=require("./route/register");
const orderroute=require("./route/order")
app.use("/login",loginroute)
app.use("/register",registerroute)
app.use("/order",orderroute)
const port = process.env.PORT || 9002;
app.listen(port, () => {
    console.log(`server running at port ${port}`)

})








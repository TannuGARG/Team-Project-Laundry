const express = require("express");
const router = express.Router();
const UserDetail = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt")
const secret = "mynameistamannafrom10xacademy"
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/", async (req, res) => {
    console.log(req.body)
    const Email = req.body.Email;
    const Password = req.body.Password;
    console.log("pass", req.body.Email)
    const userEmail = await UserDetail.findOne({ Email: req.body.Email });
    if (userEmail) {
        const isMatch = await bcrypt.compare(Password, userEmail.Password)
        if (isMatch) {
            try {

                const token = jwt.sign(req.body, secret, { expiresIn: '1d' });

                console.log(token)
                res.header("authorization",token)
                res.send({ status: "Login Successfully", jwttoken: token, user: userEmail })

            } catch (err) {
                console.log(err)
            }


        }
        else {
            res.send({ status: "Incorrect Password" })

        }


    } else {
        res.send({ status: "User not registered" })
    }












})


module.exports = router;
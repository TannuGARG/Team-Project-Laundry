const express = require('express');
const router = express.Router();
const OrderDetails = require('../models/order');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const {JsonWebTokenError} = require("jsonwebtoken")

const secret = "mynameistamannafrom10xacademy"
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const jwt = require("jsonwebtoken")

router.get('/', async (req, res) => {
    console.log(req.body.token)
    const token = req.body.token;
    if (!token) return res.status(401).send('Access Denied !');
    console.log(token);
    try 
    {
        
        const decode = jwt.verify(token, secret);
        console.log("decoded",decode)
        const orderData = await OrderDetails.find({ user: req.body.user });

        res.json({
                status: "Success",
                data: orderData
        })
    } 
    catch (error) 
    {
        res.status(400).send('Invalid token !');
    }

// ----------------------------------





    // try {
    //     console.log("decoded", decode)
    //     const orderData = await OrderDetails.find({ user: req.body.user });
    //     res.json({
    //         status: "Success",
    //         data: orderData,

    //     })
    // } catch (err) {
    //     console.log("invalid")
    //     // res.json({
    //     //     message: "access denied"
    //     //     // status : "Failed to get orders",
    //     //     // message : err.message
    //     //     // res.send({message:"access denied"})
    //     // })
    // }



})

router.post('/',
    body("user").isMongoId(),
    body("orderTime").isDate(),
    body("productlist"),
    body("totalprice"),
    body("totalitems"),
    body("status"),
    async (req, res) => {
        try {
            const orderData = await OrderDetails.create({
                user: req.body.user,
                orderTime: req.body.orderTime,
                productlist: req.body.productlist,
                totalprice: req.body.totalprice,
                totalitems: req.body.totalitems,
                status: req.body.status
            });
            res.json({
                status: "Success",
                data: orderData,

            })
        } catch (err) {
            res.json({
                status: "Failed to create order",
                message: err.message
            })
        }
    })

router.put('/', body("_id").isMongoId(), async (req, res) => {
    try {
        const order = await OrderDetails.findByIdAndUpdate({ _id: req.body._id }, req.body)
        res.json({
            status: "Updated Successfully",
            data: order
        })
    } catch {
        res.json({
            status: "Failed to update order",
            message: err.message
        })
    }
})

module.exports = router;


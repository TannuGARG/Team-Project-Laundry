const express = require('express');
const router = express.Router();
const OrderDetails = require('../models/order');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const { JsonWebTokenError } = require("jsonwebtoken")
const UserDetail = require("../models/user");
const secret = "mynameistamannafrom10xacademy"
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const jwt = require("jsonwebtoken")

router.get('/', async (req, res) => {


    try {
        const orderData = await OrderDetails.find({ user: req.user});
        const l=orderData.length
      
        console.log("check--------------------------", orderData)
        res.json({
            status: "Success",
            content: orderData
        })
    }
    catch (error) {
        res.status(400).send('Invalid token !');
    }



})


router.post('/',

    async (req, res) => {
        console.log("tamanna", req.body)
        try {

            const orderData = await OrderDetails.create({
                user: req.user,

                orderTime: req.body.date,
                productlist: req.body.services,
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


const express=require("express");
const router=express.Router();
const UserDetail=require("../models/user");
const bodyParser=require("body-parser")
router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())


router.post("/", async (req, res) => {
    const Email = req.body.Email;
    console.log("back", Email)
    try {
        const User1 = await UserDetail.findOne({ email: req.body.Email });
        if (User1 && User1.Email === req.body.Email) {
            res.send({ message: "User already Exist" })
        } else {
            const user = new UserDetail({
                Name: req.body.Name,
                Phone: req.body.Phone,
                District: req.body.District,
                Pincode: req.body.Pincode,
                Email: req.body.Email,
                State: req.body.State,
                Address: req.body.Address,
                Password: req.body.Password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {

                    res.send({ message: "Successfully registered" })
                }
            })


        }

    }
    catch (err) {
        console.log(err)
    }







});
module.exports = router;

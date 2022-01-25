const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// we have defined how r schema must look like
userSchema = new mongoose.Schema({
    Name:  {
        type:String,
        required: true
        },
    Phone: Number,
    District:String,
    Pincode:Number,
    Email: {
        type:String ,
        unique:true
        },
    State:String,
    Password: String

})
userSchema.pre("save",async function(next){
    console.log(`current password is ${this.Password}`)
    this.Password = await bcrypt.hash(this.Password,10);

    
    next();
})


//created a collection named User
const UserDetails= mongoose.model("UserDetails", userSchema);

module.exports =UserDetails;
//tamanna garg



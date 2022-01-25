
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

var productSchema = new Schema({
    producttype: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    wash:{type:Boolean, default:false},
    iron:{type:Boolean, default:false},
    fold:{type:Boolean, default:false},
    pack:{type:Boolean, default:false},
    price: { type: Number, default: 0 }
})

var OrderSchema=new Schema({
    user:{
        type:mongoose.Types.ObjectId, 
        ref: "UserDetails",
        required: true   
    },
    orderTime: {
        type: Date,
        required : true
    },
    productlist : [productSchema], 
    totalprice: {
        type: Number,
        required : true
    },
    totalitems: {
        type: Number,
        required : true
    },
    status: {
        type: String,
        default: "Ready to pickup"
    }
})

const OrderDetails=mongoose.model('OrderDetails',OrderSchema)

module.exports=OrderDetails;
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:String
    },
    discount:{
        type:Number,
        default:0
    },     
    bccolor:{
        type:String
    },
    panelcolor:{
        type:String
    },
    textcolor:{
        type:String
    }
})


module.exports =  mongoose.model('product' , productSchema)
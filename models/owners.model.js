const mongoose = require("mongoose");



const ownerSchema = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    products:{
        type:Array,
        default:[]
    },
    contact:{
        type:String
    },
    picture:{
        type:String
    },
    gstin:{
        type:String
    }
})


module.exports =  mongoose.model('owner' , ownerSchema)
const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:String
    },
    picture:{
        type:String
    }
})


module.exports =  mongoose.model('user' , userSchema)
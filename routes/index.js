const express = require('express')
const isLoggedin = require('../middlewares/isLoggedin')
const userModel = require('../models/user.model')
const router = express.Router()


router.get('/' ,  function(req , res){
   let error = req.flash("error")
   res.render("login" , {error})
})

router.get('/shop' , isLoggedin ,async function(req,res){
   let user = await userModel.findOne({email:req.user.email})
   res.render('Home' , {user})
   console.log(user)
})

module.exports = router
const express = require('express')
const isLoggedin = require('../middlewares/isLoggedin')
const userModel = require('../models/user.model')
const productModel = require('../models/product.model')
const router = express.Router()


router.get('/' ,  function(req , res){
   let error = req.flash("error")
   res.render("login" , {error})
})

router.get('/shop' , isLoggedin ,async function(req,res){
   let user = await userModel.findOne({email:req.user.email})
   let products = await productModel.find()
 
   products.map((elem , id)=>{
    let base64image = elem.image.toString('base64')
    const imageSrc = `data:image/jpegbase64,${base64image}`
    console.log(imageSrc)
    res.render('Home' , {user , products , imageSrc})
   })
 
})

module.exports = router
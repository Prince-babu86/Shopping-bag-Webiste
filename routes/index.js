const express = require('express')
const isLoggedin = require('../middlewares/isLoggedin')
const router = express.Router()


router.get('/' ,  function(req , res){
   let error = req.flash("error")
   res.render("login" , {error})
})

router.get('/shop' , isLoggedin , function(req,res){
   res.send(req.user.fullname)
})

module.exports = router
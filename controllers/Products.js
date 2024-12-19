const productModel = require('../models/product.model')

module.exports.Products = async function(req , res){
    try {
        let {name , price , discount} = req.body
   let product = await productModel.create({
    image:req.file.buffer,
    name,
    price,
    discount
   })
   res.redirect('/owners/admin')
    } catch (err) {
        res.send(err.message)
    }
}
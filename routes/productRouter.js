const express = require('express')
const upload = require('../config/multer-config')
const router = express.Router()

const {Products} = require('../controllers/Products')



router.post('/create' , upload.single("image") , Products)


module.exports = router
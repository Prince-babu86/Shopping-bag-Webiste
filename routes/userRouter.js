const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { has } = require("config");
const {generateToken} = require('../utils/generateToken')
const {registerUser , loginUser} =  require('../controllers/Auth')


router.get("/", function (req, res) {
  res.send("ownerspage......");
});

router.post("/register", registerUser );
router.post('/login' , loginUser)

module.exports = router;

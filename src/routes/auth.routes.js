const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();


router.post("/register",authController.registerUser)
router.get("/getuser",authController.getUser)
module.exports = router
;
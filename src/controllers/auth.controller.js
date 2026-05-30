const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req,res){

   const {username,email,password} = req.body

   const isemailAlreadyPresent = await userModel.findOne({
    email
   })

   if(isemailAlreadyPresent){
    return res.status(409).json({
        message:"user already exits"
    })
   }

   const user = await userModel.create({
      username,
      email,
      password
   })

   const token = jwt.sign(
      {
         id:user._id
      },
      process.env.JWT_SECRET
   )

   res.cookie("token",token)

   res.status(201).json({
      message:"user registered successfully",
      user
   })

}

async function getUser(req,res){

   const users = await userModel.find();

   console.log("cookies:",req.cookies);

   return res.status(200).json({
      users,
      cookies:req.cookies
   })

}

module.exports = {
   registerUser,
   getUser
}
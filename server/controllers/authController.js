require("dotenv").config()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userSchema = require("../models/userModel")
const userValidator=require("../dataValidator/userValidator")
const login = async (req,res)=>{ 
    const {password,userName}=req.body
    const result=await userValidator.loginValidator({userName,password})
    if(result.status!=200)
        return res.status(result.status).json(result.message)
   // const match = await bcrypt.compare(password, result.foundUser.password)
   // if(!match)return res.status(401).json({message:'Unauthorized' })
        const userInfo={_id:result.foundUser._id,name:result.foundUser.name,
    permission:result.foundUser.permission,userName:result.foundUser.userName,email:result.foundUser.email}
    const accessToken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
     
    
}
const register = async (req,res)=>{
    const {name,userName,email,password}=req.body
   const result=await userValidator.userValidator({name,userName,email,password})
   if(result.status!=200)
    return  res.status(result.status).json(result.message)
const hashPwd=await bcrypt.hash(password,10)
const object1={name,userName,email,password:hashPwd}
const user=await userSchema.create(object1)
if(user)
    return res.status(201).json({message:`New user ${user.userName}
        created` })
         else {
        return res.status(400).json({message:'Invalid user received'})}
}
module.exports = {login, register}
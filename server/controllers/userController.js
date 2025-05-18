
const {userValidator}=require("../dataValidator/userValidator")
const userService=require("../services/userService")
const mongoose=require("mongoose")
const getUsers=async(req,res)=>{
    const users=await userService.getUsers
    res.json(users)
}

const getUserById=async (req,res)=>{
    const {_id}=req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
            return res.status(400).send("type error")
    const user=await userService.getUserById(_id)
    if(!user)
        return res.status(404).send("the user not found")
    res.json(user)
}
const addUser=async (req,res)=>{
    const data=req.body
    const result= await userValidator(data)
    if(result.status!==200)
        return res.status(result.status).send(result.message)
    const newuser=await userService.addUser(data)
    res.json(newuser)
}
const updateUser=async(req,res)=>{
    const {_id,name,userName,email,password,permission}=req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send("type error")
    let user=await UserSchema.findById(_id)
    if(!user)
        return res.status(404).send("the user not found")
    const result=await userValidator({_id,name,userName,email,password,permission})
    if(result.status!==200)
        return res.status(result.status).send(result.message)
const updateUser=await userService.updateUser({_id,name,userName,email,password,permission})
    res.json(updateUser)
}
const deleteUser=async (req,res)=>{
    const {_id}=req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
            return res.status(400).send("type error")
    const deletedUser= await userService.deleteUser(_id)
    if(!user)
        return res.status(404).send("the user not found")
 
    res.json(deletedUser)
}
module.exports={getUsers,getUserById,addUser,updateUser,deleteUser}

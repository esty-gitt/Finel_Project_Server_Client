const UserSchema=require("../models/userModel")
const userValidator=async(data)=>{
    if(!data.name||!data.userName)
        return {status:400, message:"the name & the userName is required"}
    if(data.userName.trim()===""||data.userName.trim()==="")
        return {status:400, message:"user name is required"}
        const user=await UserSchema.findOne({userName:data.userName})
        if(user)
          { console.log("user name must be unique")
             return {status:400, message:"user name must be unique"}
        }
    return {status:200, message:"success"}
}
const loginValidator=async(data)=>{
    if(!data.userName||!data.password)
        return {status:400, message:"the user name & the password is required"}
    const foundUser = await UserSchema.findOne({userName:data.userName}).lean()
    if (!foundUser) {
        return {status:400, message:"Unauthorized"}
        }
    return {status:200, message:"success", foundUser}
}
module.exports={userValidator,loginValidator}
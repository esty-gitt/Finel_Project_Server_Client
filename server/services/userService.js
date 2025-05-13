
const userAccess=require("../dataAcces/userAccess")


const getUsers=async()=>{
  return await userAccess.getUsers() }

  const getUserById=async(_id)=>{
 return await userAccess.getUserById(_id)  }

 const addUser=async (data)=>{
    return await userAccess.addUser(data)}
 
const updateUser=async(data)=>{ 
    return await userAccess. updateUser(data)
}
const deleteUser=async (_id)=>{
     return await userAccess.deleteUser(_id)
    
}
module.exports={getUsers,getUserById,addUser,updateUser,deleteUser}
const shoppingListSchema = require('../models/shoppingListModel');
const getShopingList=  async (req) => {
    const userId = req.user._id;
    const shoppingList = await shoppingListSchema.find({userId}).populate('productInList.product').lean();
    return shoppingList;
}
const getShoppingListById=async (_id)=>{
     const shoppingList=await shoppingListSchema.findById(_id).lean()
     return shoppingList
  
}
const addShoppingList=async (dataShoppingList)=>{
    const newShoppingList=await shoppingListSchema.create({userId:dataShoppingList.userId,nameList:dataShoppingList.nameList,productInList:dataShoppingList.productInList})
    return newShoppingList
}
const updateShoppingList=async (dS)=>{
    let shoppingList=await shoppingListSchema.findById(dS._id)
   
    shoppingList.nameList=dS.nameList
    shoppingList.productInList=dS.productInList
    const updateShoppingList=await shoppingList.save()
    return updateShoppingList
}
const deleteShoppingList=async (_id)=>{
    const shoppingList=await shoppingListSchema.findById(_id)   
    
    const deletedShoppingList= await shoppingList.deleteOne()
    return deletedShoppingList

}
module.exports={getShopingList,getShoppingListById,addShoppingList,updateShoppingList,deleteShoppingList}

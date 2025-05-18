const mongoose=require("mongoose")
const shoppingListModel=new mongoose.Schema({
 nameList:
    {type:String,
       requierd:true} , 
  productInList: {} ,
    
},{})
module.exports=shoppingListModel
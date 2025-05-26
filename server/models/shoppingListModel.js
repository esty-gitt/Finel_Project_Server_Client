const mongoose=require("mongoose")
const shoppingListModel=new mongoose.Schema({
   userId: {type:mongoose.Types.ObjectId,ref:'City',required:true},
   nameList:
    {type:String,
       requierd:true} , 
       productInList: {
         
         type: [
           {product:{ type: mongoose.Types.ObjectId, ref: 'Product', required: true },  
            quantity: {
            type: Number,
           default: 1,
          }}
       
         ],
         required: true,
         unique: true,
       }
    
},{
   timestamps:true
})
module.exports = mongoose.model('ShoppingList', shoppingListModel)

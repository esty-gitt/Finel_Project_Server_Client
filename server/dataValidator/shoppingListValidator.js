const ShoppingListSchema= require('../models/shoppingListModel');
const userSchema= require('../models/userModel');
const productSchema= require('../models/productModel');
const mongoose = require('mongoose');
const shoppingListValidator = async (data) => {
    if (!data.nameList||!data.productInList)//בדיקת אם יש נתונים
        return { status: 400, message: "nameList is required" }
    if (data.nameList.trim() === "")
        return { status: 400, message: "nameList is required"} 
    if (!mongoose.Types.ObjectId.isValid(data.userId))//בדיקה אם הid תקין
        return { status: 400, message: "userId is not valid"}
     if(data.productInList.length===0)
        return { status: 400, message: "productInList is required" }
    // const user=await userSchema.findById(data.userId).lean()
    // if(user==null)//בדיקת אם יש משתמש עם הid הזה
    //     return { status: 404, message: "user not found" }
    
        const isValidProduct = data.productInList.every((item) =>
            item.product && mongoose.Types.ObjectId.isValid(item.product)
        );
        if (!isValidProduct)
            return { status: 400, message: "One or more product IDs are invalid" };
    
        const productIds = data.productInList.map((item) => item.product);
        const existProducts = await productSchema.find({ _id: { $in: productIds } }).lean();
        if (existProducts.length !== productIds.length)
            return { status: 404, message: "One or more products not found" };
    
        const nameListExists = await ShoppingListSchema.findOne({
            _id: { $ne: data._id },
            nameList: data.nameList,
            userId: data.userId
        });
        if (nameListExists)
            return { status: 400, message: "nameList must be unique for this user" };
    
        return { status: 200, message: "success" };
}
module.exports = shoppingListValidator;
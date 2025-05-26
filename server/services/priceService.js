const priceAccess = require("../dataAcces/priceAccess")
const getPricesByBarcodes=async(barcodes,storeName)=>{
    return await priceAccess.getPricesByBarcodes() 
}
const getPrices=async()=>{
    return await priceAccess.getPrices()
}
const getPriceById=async (_id)=>{
     return await priceAccess.findById(_id)
}
const addPrice=async (dataprice)=>{
   return await priceAccess.addPrice(dataprice)
}
const updatePrice=async(dataPrice)=>{
   return await priceAccess.updatePrice(dataPrice)
}
const deletePrice=async (_id)=>{
    return await priceAccess.deletePrice(_id)
    
}
module.exports={getPricesByBarcodes,getPrices,getPriceById,addPrice,updatePrice,deletePrice}


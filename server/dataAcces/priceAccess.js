const PriceSchema = require("../models/priceModel")
const getPricesByBarcodes=async(barcodes,storeName)=>{
    const prices = await PriceSchema.find({
        productId: { $in: barcodes },
        storeId: storeName
    })
    return prices
}
const getPrices=async()=>{
    const prices=await PriceSchema.find().lean()
   return prices
}
const getPriceById=async (_id)=>{
    const price=await PriceSchema.findById(_id).lean()
    return price
}
const addPrice=async (dataPrice)=>{
    const newPrice=await PriceSchema.create({price:dataPrice.price,productId:dataPrice.productId,storeId:dataPrice.storeId})
    return newPrice
}
const updatePrice=async(dataPrice)=>{
    let changePrice=await PriceSchema.findById(dataPrice._id)
    if(!changePrice)
        return undefined
    changePrice.price=dataPrice.price
    changePrice.productId=dataPrice.productId
    changePrice.storeId=dataPrice.storeId
    const updatePrice=await changePrice.save()
    return updatePrice
}
const deletePrice=async (_id)=>{
    const price=await PriceSchema.findById(_id)
    if(!price)
        return undefined
    const daletedPrice= await price.deleteOne()
   return daletedPrice
}
module.exports={getPricesByBarcodes,getPrices,getPriceById,addPrice,updatePrice,deletePrice}


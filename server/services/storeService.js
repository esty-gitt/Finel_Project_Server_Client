const storeAccess = require("../dataAcces/storeAccess")
const priceAccess = require("../dataAcces/priceAccess")
const getStores=async()=>{
   
     const tt=await storeAccess.getStores()
     console.log("tt",tt)
     return tt
}
const getStoreById=async(_id)=>{
    return await storeAccess.getStoreById(_id)
}
const getListStoreByTotalPrice = async(cityId, items) => {
    const stores = await storeAccess.getStoreByCity(cityId)//חיפוש העיר
    
    const productsId=items.map((product1)=>{
        return product1.product._id
    })//מציר את הid של המוצרים
    console.log("productsId", productsId)
    const amount =await Promise.all(stores.map(async (storeName) => {
        console.log("storeName", storeName._id)
        const prices=await priceAccess.getPricesByBarcodes(productsId,storeName._id)
        const hasMissingPrice = prices.some((p) => p == null || p.price == null);
        if (hasMissingPrice) {
            console.log("חסרים מחירים - מדלג על החנות:", storeName.name);
            return null; // נחזיר null כדי לסנן אותה בהמשך
        }
        console.log("prices", prices)
       const nprices=prices.map((price1,index) => {
            return (price1.price)*items[index].quantity
        })
        console.log("nprices", nprices)
        const total = nprices.reduce((accumulator, price) => accumulator + price, 0)
        console.log("total", total)
        const totalStore = { total, storeName }
        console.log("totalStore", totalStore)
        return totalStore
    }
    ))
    const filteredAmount = amount.filter((entry) => entry !== null);

    const result = filteredAmount.sort((a, b) => a.total - b.total);
 
    console.log("result", result)
    return result
}
const addStore=async(dataStore)=>{
   return await storeAccess.addStore(dataStore)
}
const updateStore = async (dataStore) => {
    
    return await storeAccess.updateStore(dataStore)
}
const deleteStore=async(_id)=>{
return await storeAccess.deleteStore(_id)
}
module.exports = { getListStoreByTotalPrice,getStores,getStoreById ,addStore,updateStore,deleteStore}
const storeAccess = require("../dataAcces/storeAccess")
const priceAccess = require("../dataAcces/priceAccess")
const getStores=async()=>{
    return await storeAccess.getStores()
}
const getStoreById=async(_id)=>{
    return await storeAccess.getStoreById(_id)
}
const getListStoreByTotalPrice = (cityId, items) => {
    const stores = storeAccess.getStoreByCity(cityId)//חיפוש העיר
    const productsId=items.product.map((product)=>{
        return product._id
    })//מציר את הid של המוצרים
    const amount = stores.map(async (storeName) => {
        const prices=priceAccess.getPricesByBarcodes(productsId,storeName)
const nprices=prices.map((price) => {
            return price*items[index].quantity
        })
        const total = nprices.reduce((accumulator, price) => accumulator + price, 0)
        const totalStore = { total, storeName }
        return totalStore
    }
    )
   const result= amount.sort((a, b) =>  a.total - b.total )
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
const storeAccess = require("../dataAcces/storeAccess")
const priceAccess = require("../dataAcces/priceAccess")
const getStores=async()=>{
    return await storeAccess.getStores()
}
const getStoreById=async(_id)=>{
    return await storeAccess.getStoreById(_id)
}
const getListStoreByTotalPrice = (cityId, products) => {
    const stores = storeAccess.getStoreByCity(cityId)
    const productsId=products.map((product)=>{
        return product._id
    })
    const amount = stores.map(async (storeName) => {
        const prices=priceAccess.getPricesByBarcodes(productsId,storeName)
        const total = prices.reduce((accumulator, price) => accumulator + price.amount, 0)
        const totalStore = { total, storeName }
        return totalStore
    }
    )
    amount.sort((a, b) => { a.total - b.total })
    return amount
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
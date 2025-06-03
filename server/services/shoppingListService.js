const shoppingListAccess = require('../dataAcces/shoppingListAccess');
const getShoppingList = async (req) => {
    return await shoppingListAccess.getShopingList(req);
};
const getShoppingListById = async (_id) => {
    return await shoppingListAccess.getShoppingListById(_id);
};
const addShoppingList = async (dataShoppingList) => {
    return await shoppingListAccess.addShoppingList(dataShoppingList);
}
const updateShoppingList = async (dS) => {
    return await shoppingListAccess.updateShoppingList(dS);
};
const deleteShoppingList = async (_id) => {
    return await shoppingListAccess.deleteShoppingList(_id);
};
module.exports = {getShoppingList, getShoppingListById, addShoppingList, updateShoppingList, deleteShoppingList}

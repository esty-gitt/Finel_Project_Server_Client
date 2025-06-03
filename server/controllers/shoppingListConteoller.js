const shoppingListService = require('../services/shoppingListService');
const shoppingListValidator = require('../dataValidator/shoppingListValidator');

const mongoose = require('mongoose');
const getShoppingList = async (req, res) => {
    const shoppingList = await shoppingListService.getShoppingList(req);
    res.json(shoppingList);
}
const getShoppingListById = async (req, res) => {
    const {_id } = req.params
    const shoppingList = await shoppingListService.getShoppingListById(_id,req)
    if (!shoppingList)
        return res.status(404).send("the shopping list not found")
    res.json(shoppingList)
}
const addShoppingList = async (req, res) => {
    const ShoppingList= req.body
    const result=await shoppingListValidator(ShoppingList)
    if(result.status!==200)
        return res.status(result.status).send(result.message)
    const newShoppingList=await shoppingListService.addShoppingList(ShoppingList)
   res.json(newShoppingList)

  }
  const updateShoppingList = async (req, res) => {
    console.log(req.body);
    const { _id, nameList, productInList } = req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send("type error")
    const shoppingList = await shoppingListService.getShoppingListById(_id)
    if (!shoppingList)
        return res.status(404).send("the shopping list not found")
    const result = await shoppingListValidator({ _id, nameList, productInList })
    if (result.status !== 200)
        return res.status(result.status).send(result.message)
    const updatedShoppingList = await shoppingListService.updateShoppingList({ _id, nameList, productInList })
    res.json(updatedShoppingList)
  }
  const deleteShoppingList = async (req, res) => {
    const { _id } = req.params
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).send("type error")
    const shoppingList = await shoppingListService.getShoppingListById(_id).lean()
    if (!shoppingList)
        return res.status(404).send("the shopping list not found")
    const deletedShoppingList = await shoppingListService.deleteShoppingList(_id)
    return res.json(deletedShoppingList)
  }
 module.exports={getShoppingList, getShoppingListById, addShoppingList, updateShoppingList, deleteShoppingList}
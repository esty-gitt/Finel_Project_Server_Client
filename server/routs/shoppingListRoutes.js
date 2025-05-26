const express= require('express');
const shoppingListcontroller=require('../controllers/shoppingListConteoller')
const router=express.Router();
const verifyJWT=require('../middleware/verifyJWT')
router.use(verifyJWT)
router.get("/",shoppingListcontroller.getShoppingList)
router.get('/:_id',shoppingListcontroller.getShoppingListById)
router.post('/',shoppingListcontroller.addShoppingList)
router.put('/',shoppingListcontroller.updateShoppingList)
router.delete('/:_id',shoppingListcontroller.deleteShoppingList)
module.exports=router
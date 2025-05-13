const verifyJWT=require("../middleware/verifyJWT")
const isAdmin=require("../middleware/isAdmin")
const storeController=require("../controllers/storeController")
const express=require("express")
const router=express.Router()
router.use(verifyJWT)
router.get("/",storeController.getStore)//user
router.get("/_id",storeController.getStoreById)//user
router.post("/",isAdmin,storeController.addStore)//admin
router.put("/",isAdmin,storeController.updateStore)//admin
router.delete("/:_id",isAdmin,storeController.deleteStore)//admin
router.get("/ListStoreByPrice",storeController.getListStoreByTotalPrice)//user

module.exports=router

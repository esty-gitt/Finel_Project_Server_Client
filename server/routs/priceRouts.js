const verifyJWT=require("../middleware/verifyJWT")
const isAdmin=require("../middleware/isAdmin")
const priceController=require("../controllers/priceController")
const express=require("express")
const router=express.Router()
router.use(verifyJWT)
router.use(isAdmin)
router.get("/",priceController.getPrices)//admin
router.get("/:_id",priceController.getPriceById)//admin
router.post("/",priceController.addPrice)//admin
router.put("/",priceController.updatePrice)//admin
router.delete("/:_id",priceController.deletePrice)//admin
module.exports=router

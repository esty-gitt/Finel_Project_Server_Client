const verifyJWT=require("../middleware/verifyJWT")
const isAdmin=require("../middleware/isAdmin")
const productController=require("../controllers/productController")
const express=require("express")
const router=express.Router()
router.use(verifyJWT)
router.get("/",productController.getProducts)//admin
router.get("/:_id",isAdmin,productController.getProductById)//admin
router.get("/getByName",productController.getProductByName)//user
router.post("/",isAdmin,productController.addProduct)//admin
router.put("/",isAdmin,productController.updateProduct)//admin
router.delete("/:_id",isAdmin,productController.deleteProduct)//admin
module.exports=router
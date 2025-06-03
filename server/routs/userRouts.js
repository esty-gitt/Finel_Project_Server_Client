const verifyJWT=require("../middleware/verifyJWT")
const isAdmin=require("../middleware/isAdmin")
const userController=require("../controllers/userController")
const express=require("express")
const router=express.Router()
router.use(verifyJWT)
router.get("/",isAdmin,userController.getUsers)//admin
router.get("/_id",isAdmin,userController.getUserById)//admin
router.post("/",userController.addUser)//admin
router.put("/",isAdmin,userController.updateUser)//admin
router.delete("/:_id",isAdmin,userController.deleteUser)//admin
module.exports=router

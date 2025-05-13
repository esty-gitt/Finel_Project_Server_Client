const verifyJWT=require("../middleware/verifyJWT")
const isAdmin=require("../middleware/isAdmin")
const cityController=require("../controllers/cityController")
const express=require("express")
const router=express.Router()
router.use(verifyJWT)
router.get("/",cityController.getCities)//user
router.get("/:_id",cityController.getCityById)//user
router.post("/",isAdmin,cityController.addCity)//admin
router.put("/",isAdmin,cityController.updateCity)//admin
router.delete("/:_id",isAdmin,cityController.deleteCity)//admin
module.exports=router

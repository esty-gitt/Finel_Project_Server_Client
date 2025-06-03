
const isAdmin=async(req,res,next)=>{
    console.log(req.user)
if(req.user.permission!="admin")
    return res.status(403).json({massage:"Unauthorized user"})
next()
}
module.exports=isAdmin
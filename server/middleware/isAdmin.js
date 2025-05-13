
const isAdmin=async(req,res,next)=>{
if(req.user.permission!=='admin')
    return res.status(403).json({massage:"Unauthorized user"})
next()
}
module.exports=isAdmin
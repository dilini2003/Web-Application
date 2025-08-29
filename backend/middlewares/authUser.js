import jwt from 'jsonwebtoken'

//admin authentication middleware
const authUser = async (req,res, next ) => {
    try {
        const {token} = req.headers;
if (!token) {
   return res.json({success:true,message:'Login Success'})
}
const decoded = jwt.verify(token, process.env.JWT_SECRET)
// req.body.userId = decoded.id
req.userId = decoded.id

next()


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authUser


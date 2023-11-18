const asyncHandler=require('express-async-handler')
const registerUser=asyncHandler(async (req,res)=>{
    console.log('The requested body is ', req.body);
    res.json({message:"Register the user"});
})
module.exports={registerUser}
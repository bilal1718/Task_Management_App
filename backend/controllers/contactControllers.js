const asyncHandler=require('express-async-handler');
const Contact=require("../models/contactModel")
const createContact=asyncHandler(async(req,res)=>{
    console.log('The request body is ',req.body)
    const {firstname,secondname,email}=req.body;
    if(!firstname || !secondname || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        firstname,
        secondname,
        email,
    });
    console.log(contact);
    res.status(201).json(contact);
})
module.exports={createContact};
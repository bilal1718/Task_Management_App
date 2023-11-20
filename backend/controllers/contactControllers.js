const asyncHandler=require('express-async-handler');
const Contact=require("../models/contactModel")
const createContact=asyncHandler(async(req,res)=>{
    console.log('The request body is ',req.body)
    const {projectname,projectmanager,email,priority,description,startdate,enddate}=req.body;
    if(!projectname || !projectmanager || !email || !priority || !description || !startdate || !enddate){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        projectname,
        projectmanager,
        email,
        priority,
        description,
        startdate,
        enddate
    });
    console.log(contact);
    res.status(201).json(contact);
})
module.exports={createContact};
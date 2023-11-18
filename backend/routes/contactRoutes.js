const express=require('express');
const {createContact}=require('../controllers/contactControllers');
const router=express.Router();
router.route("/").post(createContact);
module.exports=router;
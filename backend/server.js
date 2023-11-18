console.log("The Form");
const express=require('express');
const errorHandler = require('./middleWare/errorHandler');
const connectDB = require('./config/dbConnection');
const cors=require('cors');
const dotenv=require('dotenv').config();
connectDB();
const app=express();
app.use(cors())
const port=process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
 app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
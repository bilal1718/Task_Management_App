const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
    const connect=await mongoose.connect(`mongodb+srv://admin:admin@bilal.tsgadra.mongodb.net/myContacts-backend?retryWrites=true&w=majority`)
    console.log("Database Connected: ",connect.connection.host,connect.connection.name)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports=connectDB;
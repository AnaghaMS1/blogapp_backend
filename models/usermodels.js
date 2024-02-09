const mongoose=require("mongoose")

const userSchema =new mongoose.Schema(
    {
        name:String,
        age:String,
        phoneno:String,
        address:String,
        pincode:String,
        emailid:String,
        password:String

    }
)
module.exports=mongoose.model("users",userSchema)
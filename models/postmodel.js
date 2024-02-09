const mongoose=require("mongoose")
///in user table _id =>userid value in postmodel
const postSchema=new mongoose.Schema(
    {
        //datatype of userid is objectid
        //user is store userid
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:"user"

        },
        post:{
            type:String,
            require:true,

        },
        postedDate:{
            type:Date,
            default:Date.now//current time

        }

    }
)
module.exports=mongoose.model("blogPost",postSchema)
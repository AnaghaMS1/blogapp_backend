


const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
 const userRouter=require("./controllers/userRouter")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)


mongoose.connect("mongodb+srv://Anagha123:anagha123@cluster0.8e1jiqb.mongodb.net/userDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.listen(3001,()=>{
    console.log("server running")
})

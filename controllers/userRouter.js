const express=require("express")
const router=express.Router()
const usermodels=require("../models/usermodels")
const bcrypt= require("bcryptjs")


hashPasswardGenertor=async (pass)=>{
    const salt= await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswardGenertor(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let user=usermodels(data)
            let result =user.save()
            res.json({
                status:"success"
            })
        }
    )
    
})


module.exports=router


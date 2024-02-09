const express=require("express")
const router=express.Router()
const usermodels=require("../models/usermodels")


router.post("/add",async(req,res)=>{
    let data=req.body
    let users= new usermodels(data)
    let result=await users.save()
    res.json({
        status:"success"
    })
})


module.exports=router


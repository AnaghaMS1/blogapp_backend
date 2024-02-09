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
    /*hashPasswardGenertor(password).then(
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

router.post("/signin",async(req,res)=>{
    let input =req.body
    let data=await usermodels.find(input)
    res.json({

          status:"success"
    })*/
const hashedPassword=await hashPasswardGenertor(password)
data.password=hashedPassword
let user=new usermodels(data)
let result=await user.save(data)
res.json({

    status:"success"
})
})

router.post("/signin",async(req,res)=>{
    let input =req.body
    let emailid=req.body.emailid
//reetrive all info of emailid

    let data=await usermodels.findOne({"emailid":emailid})
    if(!data)
    {
        return res.json({

            status:"invalid user"
        })
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json ({

            status:"invalid password"
        })
    }
    res.json({

        status:"success"
    })



})


module.exports=router


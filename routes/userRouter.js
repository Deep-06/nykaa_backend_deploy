const {UserModel}=require("../models/user.model")
const express=require("express")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,avatar,email,password}=req.body
    try{
        bcrypt.hash(password, 4, async(err, hash) =>{
            if(err){
                res.status(201).send({"error":err})
            }else{
                const user=new UserModel({name,avatar,email,password:hash})
                await user.save()
                res.status(201).send({"msg":"New user is registered"})
            }
        });
    }catch(err){
        res.status(400).send({"error":err})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result) =>{
            if(result){
                const token=jwt.sign({name:user.name},"masai")
                res.status(201).send({"msg":"Login Successful", "token":token})

            }else{
                res.status(200).send({"msg":"Wrong credential"})
 
            }
            });
        }
        
    }catch(err){
        res.status(400).send({"error":err})
    }
})

module.exports={
    userRouter
}
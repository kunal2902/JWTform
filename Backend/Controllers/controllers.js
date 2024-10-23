import bcryptjs from "bcryptjs"
import { userModel } from "../Models/model.js";
import jwt from "jsonwebtoken"

export const getFormData=async(req,res)=>{
const {email,password,name} = req.body;

try {
    const existingUser=await userModel.findOne({email})
    if(existingUser){
        return res.status(400).json({error:"user already exist"})
    }

    const hashedPass=await bcryptjs.hash(password,10)

    const newUser= new userModel({
       name,
       email,
       password:hashedPass
    })

    await newUser.save()
    res.status(200).json({message:"user registered successfully"})

} catch (error) {
    res.status(400).json({error:"User Registration failed"})
}
}

export const loginData=async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const matching=await bcryptjs.compare(password,user.password)
        if(!matching){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        
        const token= jwt.sign({id:user._id},"abcd",{
            expiresIn:"1h"
        })

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:3600000,
        })

        res.status(201).json({token})

    }catch(e){
        res.status(400).json({message:"Login Failed"})
    }
}
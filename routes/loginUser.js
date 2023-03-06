import express from "express"
import { generateAuthToken, User } from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/",async(req,res)=>{
    try {
        const user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const validatePassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if(!validatePassword){
            return res.status(400).json({message : "Invalid credentials"})
        }
        // const authToken = jwt.sign(
        //     {id:user._id},
        //     process.env.secretkey
        // );
        const token =  generateAuthToken(user._id);
        res.status(200).json({message : "Logged In SucessFully", token })
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server error"})
    }
})

export const loginRouter = router;
import express from "express";
import { Content } from "../models/Content.js";

const router = express.Router();
 

router.get("/", async (req,res)=>{
    try {
        res.status(200).json({message : "Working Fine"})
    } catch (error) {
        console.log("error", error)
        res.status(500).json({message : "Internal Server Error"})
    }
})

export const contentRouter = router;
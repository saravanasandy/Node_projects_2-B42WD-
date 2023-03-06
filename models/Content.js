import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
    {
        companyName:{
            type: String,
            required :true,
        },
        position:{
            type: String,
            required : true,
        },
        date:{
            type: Date,
            default: Date.now(),
        },
        package :{
            type: String,
        },
        question:{
            type:String,
            require: true,
        },
        user: {
            type : ObjectId,
            ref : "user",
        }
    }
)

const Content = mongoose.model("content",contentSchema);

export {Content}
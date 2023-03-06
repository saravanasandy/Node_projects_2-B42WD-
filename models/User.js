import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
            maxlength : 32,
            trim : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
            trim : true,
        },
        password : {
            type : String,
            required : true,
        },
        content : {
            type : Array,
            default :[]
        }
    }
)

const generateAuthToken = (id) =>{
    return jwt.sign({id},process.env.SecretKey)
}
const User = mongoose.model("user", userSchema);

export {User, generateAuthToken}
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { dataBaseConnection } from "./db.js";
import { signupRouter } from "./routes/signUpUsers.js";
import { loginRouter } from "./routes/loginUser.js";
import { isSignedIn } from "./controllers/auth.js";
import { contentRouter } from "./routes/content.js";

// env configuration
dotenv.config();

// db base connection
dataBaseConnection();

const app = express();
const PORT = process.env.PORT

// app.get("/",(req,res)=>{
//     res.send("working"); 
// })

// MiddleWares
app.use(express.json());
app.use(cors());

app.use("/api/content",isSignedIn,contentRouter)
app.use("/api/signup", signupRouter)
app.use("/api/login", loginRouter)


app.listen(PORT,()=>console.log(`Server is up and runnning in port ${PORT}`)); 
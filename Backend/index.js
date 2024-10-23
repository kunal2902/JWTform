import mongoose from "mongoose";
import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import router from "./Routes/Route.js";
import cookieParser from "cookie-parser";

const app=express()
const port=5001 || process.env

app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3000' ,credentials:true}))
app.use(express.json())
app.use(cookieParser())

app.use(router)

mongoose.connect('mongodb+srv://bhardwajkunal768:h7L0pziOJBCsHtYe@dashboard.str1uzy.mongodb.net/').then(
    app.listen(port,()=>{
        console.log(`Server port:${port}`)
    })
).catch((e)=>console.log(e))


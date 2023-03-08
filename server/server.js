import express from 'express'
import cors from 'cors'
import dbConnect from "./config/dbConnect.js"
import cookieParser from 'cookie-parser';
import 'dotenv/config'

const app=express();
app.use(express.json())
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

dbConnect();

app.get('/',(req, res)=>{res.send("welcome")})

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})
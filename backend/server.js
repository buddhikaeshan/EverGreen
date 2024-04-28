import express from "express"
import cors from "cors"
import { connectDB } from "./config/Db.js"
import foodRouter from "./routes/foodRoute.js"

//config
const app=express()
const port =4000

//middleware
app.use(express.json())
app.use(cors())

//db con
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://buddhikaeshan:buddhikaEshan@cluster0.lqq2sio.mongodb.net/?
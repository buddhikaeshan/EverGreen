import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://buddhikaeshan:buddhikaEshan@cluster0.lqq2sio.mongodb.net/onlyjuice').then(()=>console.log("DB connected"));
}
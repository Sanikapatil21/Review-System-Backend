import mongoose from "mongoose";

const dbConnect= async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://sanika:sanika123@cluster0.brpda.mongodb.net/ReviewSystem")
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;
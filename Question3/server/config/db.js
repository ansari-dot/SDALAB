 import mongoose from "mongoose";

 const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/labtask";

 const connectDB = async() => {
     try {
         const response = await mongoose.connect(MONGO_URI);

         console.log(`✅ MongoDB connected: ${response.connection.host}`);
     } catch (error) {
         console.error("❌ MongoDB connection failed:", error.message);
         process.exit(1);
     }
 };

 export default connectDB;
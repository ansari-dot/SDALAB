 import express from 'express';
 import dotenv from 'dotenv';
 import connectDB from './config/db.js';
 import StudentRoutes from './routes/student.route.js'
 import cors from 'cors'
 const app = express();
 dotenv.config();
 app.use(cors())
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 const PORT = process.env.PORT || 5000;

 app.get('/', (req, res) => {
     res.send("Hello its server running");
 });
 app.use('/', StudentRoutes)
 connectDB();
 app.listen(PORT, () => {
     console.log(`your server is running on PORT ${PORT}`);
 });
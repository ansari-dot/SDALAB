 import mongoose from "mongoose";

 const studentSchema = new mongoose.Schema({
     StudentName: {
         type: String,
         required: [true, "Name is required"],
         trim: true,
     },
     RegNo: {
         type: String,
         required: true,
         unique: true,
         trim: true,
     },
     semester: {
         type: Number,
         required: true,
         min: 1,
         max: 8,
     },
     cgpa: {
         type: Number,
         required: [true, "CGPA is required"],
         min: 0,
         max: 4.0,
     },
 }, {
     timestamps: true,
 });

 const Student = mongoose.model("Student", studentSchema);
 export default Student;
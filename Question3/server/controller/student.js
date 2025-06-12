 import Student from '../models/Student.js';

 export const StudentController = {
     // Add new student
     async addStudent(req, res) {
         try {
             const { StudentName, RegNo, semester, cgpa } = req.body;
             if (!StudentName || !RegNo || !semester || !cgpa) {
                 return res.status(400).json({ message: "Please fill all fields" });
             }

             const existingUser = await Student.findOne({ RegNo });
             if (existingUser) {
                 return res.status(400).json({ message: "Student record already present" });
             }

             const newStudent = new Student({ StudentName, RegNo, semester, cgpa });
             await newStudent.save();

             res.status(200).json({ message: "Student record saved successfully" });

         } catch (err) {
             console.error(err);
             res.status(500).json({ message: "Server error" });
         }
     },

     // Get all students
     async getAllStudents(req, res) {
         try {
             const students = await Student.find();
             res.status(200).json(students);
         } catch (err) {
             console.error(err);
             res.status(500).json({ message: "Server error" });
         }
     },

     // Get bad students (CGPA < 2.5)
     async getBadStudents(req, res) {
         try {
             const badStudents = await Student.find({ cgpa: { $lt: 2.5 } });
             res.status(200).json(badStudents);
         } catch (err) {
             console.error(err);
             res.status(500).json({ message: "Server error" });
         }
     },

     // Get good students (CGPA >= 2.5)
     async getGoodStudents(req, res) {
         try {
             const goodStudents = await Student.find({ cgpa: { $gte: 2.5 } });
             res.status(200).json(goodStudents);
         } catch (err) {
             console.error(err);
             res.status(500).json({ message: "Server error" });
         }
     }
 };
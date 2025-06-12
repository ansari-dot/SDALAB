import express from 'express';
import { StudentController } from '../controller/student.js';
const router = express.Router();
// router post or add the student form 
router.post('/add', StudentController.addStudent);
router.get('/all', StudentController.getAllStudents);
router.get('/bad', StudentController.getBadStudents);
router.get('/good', StudentController.getGoodStudents);



export default router;
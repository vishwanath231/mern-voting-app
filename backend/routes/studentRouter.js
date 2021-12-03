import express from "express";
const router = express.Router();

import { 
    studentRegister, 
    studentLogin, 
    studentDetails,
    allStudentDetails
} from '../controller/StudentController.js';



router
.route('/register')
.post(studentRegister)


router
.route('/login')
.post(studentLogin)


router
.route('/:id')
.get(studentDetails)


router
.route('/all/details')
.get(allStudentDetails)



export default router;
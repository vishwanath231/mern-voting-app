import express from "express";
const router = express.Router();

import { 
    studentRegister, 
    studentLogin, 
    studentDetails
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





export default router;
import express from 'express';

const router = express.Router();

import { adminRegister, adminLogin } from '../controller/AdminController.js'; 

router
.route('/register')
.post(adminRegister)

router
.route('/login')
.post(adminLogin)


export default router;
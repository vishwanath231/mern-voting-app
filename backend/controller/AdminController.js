import Admin from '../model/AdminModel.js';
import bcryptjs from 'bcryptjs';


const adminRegister = (req, res) => {

    try {
        
        const { username, department, email, password, cpassword  } = req.body;

        Admin.findOne({ email: email }, (err, check) => {

            if (check) {

                res.status(400).json({
                    success: false,
                    emailErr: `Email already exists`
                })

            }else if (password !== cpassword){

                res.status(400).json({
                    success: false,
                    passErr: `Password doesn't match`
                })

            }else {

                bcryptjs.hash(password, 8 , (err, hashPassword) => {
                    
                    const newAdmin = new Admin({
                        username,
                        department,
                        email,
                        password: hashPassword
                    })

                    newAdmin.save(err => {
                        if (err) {
                            res.status(404).json({
                                success: false,
                                msg: "Auth Falied"
                            })
                        }else{
                            res.status(201).json({
                                success: true,
                                msg: "Register Successfull"
                            })
                        }
                    })
                })
            }

        })

    } catch (err) {
        
         return res.status(500).json({
            success: false,
            msg: "server Error"
        })
    }
    
} 


const adminLogin = (req, res) => {

    try {
        
        const { email, password } = req.body;

        Admin.findOne({ email: email }, (err, check) => {

            if (!check) {

                res.status(400).json({
                    success: false,
                    emailErr: `Email incorrect`
                })

            }else {

                bcryptjs.compare(password, check.password, (err, isMatch) => {
                    
                    if (isMatch) {
                        return res.status(200).json({
                            success:true,
                            msg:'Login Successfull'
                        })
                    }else {
                        return res.status(404).json({
                            success:false,
                            passErr:'Password incorrect'
                        })
                    }
                })
            }

        })

    } catch (err) {
        
         return res.status(500).json({
            success: false,
            msg: "server Error"
        })
    }
    
} 

export { adminRegister, adminLogin };
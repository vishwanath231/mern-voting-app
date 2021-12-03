import Student from '../model/StudentModel.js';
import bcryptjs from 'bcryptjs';


const studentRegister = (req, res, next) => {
 
    try {

        const { username, register_no, email, password, cpassword } = req.body;

        Student.findOne({ register_no: register_no }, (err, register) => {

            Student.findOne({ email: email }, (err, student) => {


                if (register) {

                    res.status(400).json({
                        success: false,
                        register_no: `${register_no}`,
                        registerErr: `Register number already exists`
                    })

                }else if (student) {

                    res.status(400).json({
                        success: false,
                        email: `${email}`,
                        emailErr: `Email already exists`
                    })

                }else {

                    bcryptjs.hash(password, 8 , (err, hashPassword) => {
                    
                        const newStudent = new Student({
                            username,
                            register_no,
                            email,
                            password: hashPassword
                        })

                        newStudent.save(err => {
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
        })
        
    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
    }
}



const studentLogin = async (req, res, next) => {
    try {

        const { email, register_no,  password } = req.body;

        Student.findOne({ register_no: register_no }, (err, register) => {

            Student.findOne({ email: email }, (err, student) => {


                if (!register) {

                    return res.status(404).json({
                        success: false,
                        registerErr: "Register number incorrect"
                    })

                }else if (!student) {

                    return res.status(404).json({
                        success: false,
                        emailErr: "Email incorrect"
                    })

                }else {

                    bcryptjs.compare(password, student.password, (err, isMatch) => {
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
        })
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "server Error"
        })        
    }
} 




const studentDetails = async(req, res) => {

    try {

        const id = req.params.id;

        const details = await Student.findById(id);

        if (!details) {
            return res.status(404).json({
                success: false,
                msg: 'Not Found' 
            });
        }

        return res.status(200).json({
            success: true,
            data: details
        });

        
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "server Error"
        }) 
    }
}

export { studentRegister, studentLogin, studentDetails };
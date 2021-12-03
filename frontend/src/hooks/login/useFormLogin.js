import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentLogin } from '../../Redux/action/Student';
import axios from 'axios';


const useFormLogin = (formValidation) => {

    const [registerCheck, setRegisterCheck ] = useState('')
    const [emailCheck, setEmailCheck ] = useState('')
    const [passCheck, setPassCheck ] = useState('');
    

    const dispatch = useDispatch()

    const [values, setValues] = useState({
        email: '',
        register_no: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }


    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        setIsSubmitting(true);
        setErrors(formValidation(values))

        if (Object.keys(errors).length === 0 && isSubmitting) {
            
            axios.post('http://localhost:5000/api/student/login', values)
            .then(() => {

                dispatch(studentLogin(values))
                navigate('/home');
                
            })
            .catch((err) => {
                setRegisterCheck(err.response.data.registerErr);
                setEmailCheck(err.response.data.emailErr);
                setPassCheck(err.response.data.passErr);
            })
        }
    }


    return { handleChange, handleSubmit, values, errors, registerCheck, emailCheck, passCheck};
}

export default useFormLogin;


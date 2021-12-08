import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentRegister } from '../../Redux/action/Student';
import axios from 'axios';

const useFormRegister = (formValidation) => {

    const [emailCheck, setEmailCheck] = useState('')
    const [registerCheck, setRegisterCheck] = useState('')


    const dispatch = useDispatch()

    const [values, setValues] = useState({
        username: '',
        register_no: '',
        email: '',
        password: '',
        cpassword: ''
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

            axios.post('/api/student/register', values)
            .then(() => {

                dispatch(studentRegister(values))
                navigate('/')
            })
            .catch((err) => {
                setEmailCheck(err.response.data.emailErr);
                setRegisterCheck(err.response.data.registerErr);
            })
        }
    }


    return { handleChange, handleSubmit, values, errors, emailCheck, registerCheck };
}

export default useFormRegister;


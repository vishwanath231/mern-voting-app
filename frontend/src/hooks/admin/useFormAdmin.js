import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../Redux/action/Admin';
import axios from 'axios';


const useFormAdmin = (formValidation) => {

    const [emailCheck, setEmailCheck ] = useState('')
    const [passCheck, setPassCheck ] = useState('');
    

    const dispatch = useDispatch()

    const [values, setValues] = useState({
        email: '',
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
            
            axios.post('http://localhost:5000/api/admin/login', values)
            .then(() => {

                dispatch(adminLogin(values))
                navigate('/adminHome');
                
            })
            .catch((err) => {
                setEmailCheck(err.response.data.emailErr);
                setPassCheck(err.response.data.passErr);
            })
        }
    }


    return { handleChange, handleSubmit, values, errors, emailCheck, passCheck};
}

export default useFormAdmin;

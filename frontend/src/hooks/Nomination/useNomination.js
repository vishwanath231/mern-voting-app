import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nominationRegister } from '../../Redux/action/Nomination';
import axios from 'axios';


const useNomination = (nominationValidate) => {

    const dispatch = useDispatch()


    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    
    const [values, setValues] = useState({
        profile: '',
        name: '',
        email: '',
        dob: '',
        mobile_no: '',
        register_no: '',
        department: '',
        logo: '',
        party_name: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleClick = () => {
        document.getElementById("profile").click()
    }

    const handleLogoClick = () => {
        document.getElementById("logo").click()
    }


    const handleImage = e => {

        if (e.target.files[0]){

            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                document.getElementById('placeholder').setAttribute('src', e.target.result)
            })

            reader.readAsDataURL(e.target.files[0])
        }


        setValues({
            ...values,
            profile: e.target.files[0]
        })
    }

    const handleLogo = e => {

        if (e.target.files[0]){

            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                document.getElementById('logoPlaceholder').setAttribute('src', e.target.result)
            })

            reader.readAsDataURL(e.target.files[0])
        }

        setValues({
            ...values,
            logo: e.target.files[0]
        })
    }


    const handelChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name] : value
        })

    }

    

    const prevStep = () => {
        setStep(step => step - 1)
        setProgress(progress => progress - 25)
    }


    const stepOneCheck = () => {

        let error = {};
        if (!values.profile) {
            error.profile = "Profile is required!"
        }else if (!values.profile.name.match(/.(jpg|jpeg|png)$/i)) {
            error.profile = "File type is not supported!"
        }else  if (!values.name) {
        error.name = "Name is required!"
        }else {
            setStep(step => step + 1)
            setProgress(progress => progress + 25)
        }
          
        setErrors(error)
    }

    const stepTwoCheck = () => {

        let error = {};

        var mob = /^[1-9]{1}[0-9]{9}$/;
        
        //email
        if (!values.email) {
            error.email = "Email is required!" 
        }else if (!/\S+@\S+\.\S+/.test(values.email)){
            error.email = "Email address is invalid!"
        }else if (!values.dob) {
        error.dob = "Date of Birth is required!"
        }else 
        if (!values.mobile_no) {
            error.mobile_no = "Mobile number is required!"
        }else if (mob.test(values.mobile_no) === false) {
            error.mobile_no = "Please enter valid mobile number!"
        }else {
            setStep(step => step + 1)
            setProgress(progress => progress + 25)
        }
    
        setErrors(error);
    }


    const stepThreeCheck = () => {

        let error = {}; 

        if (!values.register_no) {
        error.register_no = "Register number is required!"
        }else if (!values.department) {
            error.department = "Department is required!"
        }else {
            setStep(step => step + 1)
            setProgress(progress => progress + 25)
        }

        setErrors(error);
    }



    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();

        let error = {}; 

        if (!values.logo) {
        error.logo = "Logo is required!"
        }else if (!values.logo.name.match(/.(jpg|jpeg|png)$/i)) {
            error.logo = "File type is not supported!"
        }else if (!values.party_name) {
            error.party_name = "Party name is required!"
        }else {
            setIsSubmitting(true);
            setErrors(nominationValidate(values));
            
            if (Object.keys(errors).length === 0 && isSubmitting) {
                setProgress(progress => progress + 25)

                const formData = new FormData();
                formData.append('profile', values.profile);
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('dob', values.dob);
                formData.append('mobile_no', values.mobile_no);
                formData.append('register_no', values.register_no);
                formData.append('department', values.department);
                formData.append('logo', values.logo);
                formData.append('party_name', values.party_name);
                     
                
                axios.post('http://localhost:5000/api/nomination/register', formData)
                .then(() => {
                    dispatch(nominationRegister(values))
                    navigate('/student/nominationList')
                })
                .catch((err) => {
                    console.log(err);
                })

            }
        }

        setErrors(error);
    }
    
    return { handleClick, handleImage, handelChange, handleSubmit, handleLogoClick, handleLogo, values, errors, step, prevStep, stepOneCheck, stepTwoCheck, stepThreeCheck, isSubmitting, progress}
}

export default useNomination;

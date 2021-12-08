import { useState, useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { nominationList } from '../../Redux/action/Nomination';
import { voteRegister } from '../../Redux/action/Vote';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useVoteForm = () => {


    const [selected, setSelected] = useState("");
    const [isCheck, setIsCheck] = useState('');
    const [success, setSuccess] = useState('')
    const [registerErr, setRegisterErr] = useState('')
    const [emailErr, setEmailErr] = useState('')


    const navigate = useNavigate();

    const nomination = useSelector(state => state.nomination.nominations)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(nominationList())
        
    }, [dispatch])

    const email = JSON.parse(localStorage.getItem('userInfo'))
    const register = JSON.parse(localStorage.getItem('userRegister'))


    const handleSubmit = (e) => {
        e.preventDefault()

        const emailVal = document.getElementById('email').value;
        const registerVal = document.getElementById('register_no').value;


        const values = {
            register_no: registerVal,
            email: emailVal,
            voted: selected
        } 


        if (!selected) {

            setIsCheck("Vote selection required!")

        }else {

            axios.post('/api/vote/newVote', values)
            .then(() => {

                setSuccess("Voted successfull");
                setIsCheck('');
                dispatch(voteRegister(values))

                setTimeout(() => {
                    navigate('/student/home')
                }, 2000);

            })
            .catch((err) => {

                setRegisterErr(err.response.data.registerErr);
                setEmailErr(err.response.data.emailErr);
            })
        }
        
    }

    return { email, register, handleSubmit, setSelected, nomination, isCheck, success, registerErr, emailErr }
}

export default useVoteForm;

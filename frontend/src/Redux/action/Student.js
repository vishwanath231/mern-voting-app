import { 
    STUDENT_REGISTER,
    STUDENT_LOGIN,
    STUDENT_DETAILS,
    STUDENT_LENGTH
} from '../constant/Constant';
import axios from 'axios';


export const studentRegister = (data) => {

    return {
        type: STUDENT_REGISTER,
        payload: data
    }
    
}


export const studentLogin = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data.email));
    localStorage.setItem("userRegister", JSON.stringify(data.register_no));
    return {
        type: STUDENT_LOGIN,
        payload: data
    }
}



export const studentDetails = () => {

    return (dispatch) => {
        axios.get('http://localhost:5000/api/student/all/details')
        .then((val) => {
            dispatch({
                type: STUDENT_DETAILS,
                payload: val.data.data
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}


export const studentLength = () => {

    return (dispatch) => {
        axios.get('http://localhost:5000/api/student/all/details')
        .then((val) => {
            dispatch({
                type: STUDENT_LENGTH,
                payload: val.data.data
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}



import { 
    STUDENT_REGISTER,
    STUDENT_LOGIN
} from '../constant/Constant';



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



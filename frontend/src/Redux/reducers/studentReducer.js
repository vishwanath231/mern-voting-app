import { 
    STUDENT_REGISTER,
    STUDENT_LOGIN 
} from '../constant/Constant';



const studentInitialState = {
    studentRegister: []
}

export const studentRegisterReducer = ( state = studentInitialState, { type, payload }) => {

    switch (type) {
        case STUDENT_REGISTER:
            return {
                studentRegister: [payload]
            }

        default:
            return state;
    }
}



const studentLoginInitialState = {
    studentLogin: []
}

export const studentLoginReducer = ( state = studentLoginInitialState, { type, payload }) => {

    switch (type) {
        case STUDENT_LOGIN:
            return { 
                studentLogin: [payload]
            }
        default:
            return state;
    }
}






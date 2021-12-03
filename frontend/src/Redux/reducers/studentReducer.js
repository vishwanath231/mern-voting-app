import { 
    STUDENT_REGISTER,
    STUDENT_LOGIN,
    STUDENT_DETAILS,
    STUDENT_LENGTH 
} from '../constant/Constant';



const studentInitialState = {
    students: []
}

export const studentReducer = ( state = studentInitialState, { type, payload }) => {

    switch (type) {
        case STUDENT_REGISTER:
            return {
                ...state,
                students: [...state.students, payload]
            }
        case STUDENT_LENGTH:
            return {
                ...state,
                students: [...payload]
            }
        case STUDENT_DETAILS:
            return {
                ...state,
                students: [...payload]
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




// const studentDetailsInitialState = {
//     studentDetails: []
// }

// export const studentDetailsReducer = (state = studentDetailsInitialState , { type, payload }) => {

//     switch (type) {
//         case STUDENT_DETAILS:
            
//             return {
//                 ...state,
//                 studentDetails: [...state.studentDetails, payload]
//             }
    
//         default:
//             return state;
//     }
// }



// const studentLengthInitialState = {
//     studentLengths: []
// }

// export const studentLengthReducer = (state = studentLengthInitialState , { type, payload }) => {

//     switch (type) {
//         case STUDENT_LENGTH:
            
//             return {
//                 ...state,
//                 studentLengths: [...state.studentLengths, payload]
//             }
    
//         default:
//             return state;
//     }
// }





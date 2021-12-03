import { 
    NOMINATION_REGISTER,
    NOMINATION_LIST,
    NOMINATION_DETAILS,
    NOMINATION_LENGTH 
} from '../constant/Constant';

const noimationReInitialState = {
    nominations: []
}

export const nominationReducer = (state = noimationReInitialState, { type, payload }) => {

    switch (type) {
        case NOMINATION_REGISTER:
            return {
                ...state,
                nominations: [...state.nominations, payload]
            }

        case NOMINATION_LIST: 
            return {
                ...state,
                nominations: [...payload]
            }
        case NOMINATION_DETAILS: 
            return {
                ...state,
                nominations: [...payload]
            }
        
        case NOMINATION_LENGTH: 
            return {
                ...state,
                nominations: [...payload]
            }
    
        default:
            return state;
    }
}




// const noimationDetailsInitialState = {
//     nominationDetails: []
// }

// export const nominationDetailsReducer = (state = noimationDetailsInitialState, { type, payload }) => {

//     switch (type) {
//         case NOMINATION_DETAILS:
//             return {
//                 ...state,
//                 nominationDetails: payload
//             }
//         default:
//             return state;
//     }
// }


// const noimationLengthInitialState = {
//     nominationLengths: []
// }

// export const nominationLengthReducer = (state = noimationLengthInitialState , { type, payload }) => {

//     switch (type) {
//         case NOMINATION_LENGTH:
            
//             return {
//                 ...state,
//                 nominationLengths: [...state.nominationLengths, payload]
//             }
    
//         default:
//             return state;
//     }
// }



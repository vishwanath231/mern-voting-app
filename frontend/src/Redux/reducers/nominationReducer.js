import { 
    NOMINATION_REGISTER,
    NOMINATION_LIST,
    NOMINATION_DETAILS 
} from '../constant/Constant';

const noimationReInitialState = {
    nominations: []
}

export const nominationReducer = (state = noimationReInitialState, { type, payload }) => {

    switch (type) {
        case NOMINATION_REGISTER:
            return {
                ...state,
                nominations: [...state.nomination, payload]
            }

        case NOMINATION_LIST: 
            return {
                ...state,
                nominations: [...payload]
            }
    
        default:
            return state;
    }
}




const noimationDetailsInitialState = {
    nominationDetails: []
}

export const nominationDetailsReducer = (state = noimationDetailsInitialState, { type, payload }) => {

    switch (type) {
        case NOMINATION_DETAILS:
            return {
                ...state,
                nominationDetails: payload
            }
        default:
            return state;
    }
}





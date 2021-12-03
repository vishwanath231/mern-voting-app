import { ADMIN_LOGIN } from '../constant/Constant';

const adminLoginInitialState = {
    adminLogin: []
}

export const adminLoginReducer = ( state = adminLoginInitialState, { type, payload }) => {

    switch (type) {
        case ADMIN_LOGIN:
            return { 
                adminLogin: [payload]
            }
        default:
            return state;
    }
}

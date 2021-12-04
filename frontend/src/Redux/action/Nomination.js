import { 
    NOMINATION_REGISTER,
    NOMINATION_LIST,
    NOMINATION_DETAILS,
    ADMIN_NOMINATION_DETAILS,
    NOMINATION_LENGTH 
} from '../constant/Constant';
import axios from 'axios';


export const nominationRegister = (data) => {
    return {
        type: NOMINATION_REGISTER,
        payload: data
    }
}

export const nominationList = () => {

    return (dispatch) => {
        axios.get('http://localhost:5000/api/nomination/list')
        .then((val) => {
            dispatch({
                type: NOMINATION_LIST,
                payload: val.data.data
            })
        }).catch((err)=> {
            console.log(err);
        })
    }
}


export const nominationDetails = (id) => {
 
    return (dispatch) => {
        axios.get(`http://localhost:5000/api/nomination/details/${id}`)
        .then((val) => {
            dispatch({
                type: NOMINATION_DETAILS,
                payload: [val.data.data]
            })

        }).catch((err)=> {
            console.log(err);
        })
    }
}





export const nominationLength = () => {

    return (dispatch) => {
        axios.get('http://localhost:5000/api/nomination/list')
        .then((val) => {
            dispatch({
                type: NOMINATION_LENGTH,
                payload: val.data.data
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}
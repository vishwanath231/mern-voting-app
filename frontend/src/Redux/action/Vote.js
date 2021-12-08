import { 
    VOTE_REGISTER,
    VOTE_LIST,
    VOTED_LENGTH
} from '../constant/Constant';
import axios from 'axios';


export const voteRegister = (data) => {
    return {
        type: VOTE_REGISTER,
        payload: data
    }
}


export const voteList = () => {

    return (dispatch) => {
        axios.get('/api/vote/voteDetails')
        .then((val) => {
            dispatch({
                type: VOTE_LIST,
                payload: val.data.data
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}


export const voteLength = () => {

    return (dispatch) => {
        axios.get('/api/vote/voteDetails')
        .then((val) => {
            dispatch({
                type: VOTED_LENGTH,
                payload: val.data.data
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}
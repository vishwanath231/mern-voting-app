import { 
    VOTE_REGISTER,
    VOTE_LIST,
    VOTED_LENGTH 
} from '../constant/Constant';


const voteInitialState = {
    votes: []
}

export const voteReducer = (state = voteInitialState, { type, payload }) => {

    switch (type) {
        case VOTE_REGISTER:
            return {
                ...state,
                votes: [...state.votes, payload]
            }
        case VOTE_LIST:
            return {
                ...state,
                votes: [...payload]
            }
        case VOTED_LENGTH:
            return {
                ...state,
                votes: [...payload]
            }
    
        default:
            return state;
    }

}

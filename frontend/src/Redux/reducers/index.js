import { combineReducers } from 'redux';
import { 
    studentReducer, 
    studentLoginReducer 
} from './studentReducer';
import { 
    nominationReducer, 
} from './nominationReducer';
import { adminLoginReducer } from './adminReducer';
import { voteReducer } from './voteReducer';


export const reducer = combineReducers({
    student: studentReducer,
    studentLogin: studentLoginReducer,
    nomination: nominationReducer,
    adminLogin: adminLoginReducer,
    voted: voteReducer
})
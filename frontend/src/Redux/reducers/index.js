import { combineReducers } from 'redux';
import { 
    studentReducer, 
    studentLoginReducer 
} from './studentReducer';
import { 
    nominationReducer, 
} from './nominationReducer';
import { adminLoginReducer } from './adminReducer';


export const reducer = combineReducers({
    student: studentReducer,
    studentLogin: studentLoginReducer,
    nomination: nominationReducer,
    adminLogin: adminLoginReducer,
})
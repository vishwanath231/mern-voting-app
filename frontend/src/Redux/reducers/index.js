import { combineReducers } from 'redux';
import { studentRegisterReducer, studentLoginReducer } from './studentReducer';
import { nominationReducer, nominationDetailsReducer } from './nominationReducer';
import { adminLoginReducer } from './adminReducer';


export const reducer = combineReducers({
    studentRegister: studentRegisterReducer,
    studentLogin: studentLoginReducer,
    nomination: nominationReducer,
    nominationDetail: nominationDetailsReducer,
    adminLogin: adminLoginReducer
})
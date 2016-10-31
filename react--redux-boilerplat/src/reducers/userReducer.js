import { USER_RECEIVE } from '../constants/actionsConstants';

const initialState = {
    username:''
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case USER_RECEIVE:
            return {...state, username:action.value};
        default:
            return state;
    }
}
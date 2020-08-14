import {
    SUCCESS_LOGIN,
    SUCCESS_REGISTER,
    ERROR_LOGIN,
    ERROR_REGISTER,
    GET_USER,
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                message: null
            }
        case ERROR_REGISTER:
            return {
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state
    }
}
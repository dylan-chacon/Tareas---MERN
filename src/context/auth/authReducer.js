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
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                message: null,
                loading: false,
            }
        case LOGOUT:
        case ERROR_LOGIN:
        case ERROR_REGISTER:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload,
                auth: null,
                user: null,
                loading: false,
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false,
            }
        default:
            return state
    }
}
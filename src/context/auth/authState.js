import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
    SUCCESS_LOGIN,
    SUCCESS_REGISTER,
    ERROR_LOGIN,
    ERROR_REGISTER,
    GET_USER,
    LOGOUT
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);
    //funciontes
    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;
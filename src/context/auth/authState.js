import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import userAxios from '../../config/axios';
import authToken from '../../config/token';
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
    const registerUser = async data => {
        try {
            const res = await userAxios.post('/api/users', data);
            dispatch({
                type: SUCCESS_REGISTER,
                payload: res.data
            })
            //obtner user
            userAuth();
        } catch (error) {
            console.log(error.response)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: ERROR_REGISTER,
                payload: alert
            })
        }
    }
    //usuario autenticado
    const userAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            authToken(token);
        }

        try {
            const res = await userAxios.get('api/auth');
            dispatch({
                type: GET_USER,
                payload: res.data.user
            })
        } catch (error) {
            dispatch({
                type: ERROR_LOGIN,
            })
        }
    }
    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;
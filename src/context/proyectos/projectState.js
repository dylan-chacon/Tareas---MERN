import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT } from '../../types';

const ProjecState = props => {
    const initialState = {
        form: false,
    }
    //dispatch actions
    const [state, dispatch] = useReducer(projectReducer, initialState);
    //CRUD functions
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }
    return (
        <projectContext.Provider
            value={{
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
        )
}

export default ProjecState;
import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS
} from '../../types';

const ProjecState = props => {
    const eProjects = [
        {name: 'Lets Goal', id: 1},
        {name: 'AllMarket', id: 2},
        {name: 'Dr. Faustus', id: 3},
    ]
    const initialState = {
        form: false,
        projects: [],
    }
//dispatch actions
    const [state, dispatch] = useReducer(projectReducer, initialState);
//CRUD functions
    //show form
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    }
    //get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: eProjects
        });
    }
    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
        )
}

export default ProjecState;
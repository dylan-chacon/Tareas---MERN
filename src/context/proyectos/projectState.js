import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    CHECK_FORM,
    PROJECT_SELECTED
} from '../../types';

const ProjectState = props => {
    const eProjects = [
        {name: 'Lets Goal', id: 1},
        {name: 'AllMarket', id: 2},
        {name: 'Dr. Faustus', id: 3},
    ]
    const initialState = {
        form: false,
        projects: [],
        errorForm: false,
        project: null
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
    //ADD project
    const addProject = project => {
        project.id = uuidv4();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }
    //mostrar error
    const showError = () => {
        dispatch({
            type: CHECK_FORM
        })
    }
    //seleccionar proyecto
    const projectSelected = projectId => {
        dispatch({
            type: PROJECT_SELECTED,
            payload: projectId
        });
    }
    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                errorForm: state.errorForm,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                projectSelected,
            }}
        >
            {props.children}
        </projectContext.Provider>
        )
}

export default ProjectState;
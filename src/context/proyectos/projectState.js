import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import userAxios from '../../config/axios';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    ERROR_PROJECT,
    CHECK_FORM,
    PROJECT_SELECTED,
    DELETE_PROJECT
} from '../../types';

const ProjectState = props => {
    const initialState = {
        form: false,
        projects: [],
        errorForm: false,
        message: null,
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
    const getProjects = async () => {
        try {
            const res = await userAxios.get('/api/projects')
            dispatch({
                type: GET_PROJECTS,
                payload: res.data.projects
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
             type: ERROR_PROJECT,
             payload: alert
            })
        }
    }
    //ADD project
    const addProject = async project => {
        try {
            const res = await userAxios.post('/api/projects', project)
            dispatch({
                type: ADD_PROJECT,
                payload: res.data.project
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
             type: ERROR_PROJECT,
             payload: alert
            })
        }
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
    //eliminar proyecto
    const deleteProject = async projectId => {
       try {
           await userAxios.delete(`/api/projects/${projectId}`)
           dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });
       } catch (error) {
           const alert = {
               msg: 'Hubo un error',
               category: 'alerta-error'
           }
           dispatch({
            type: ERROR_PROJECT,
            payload: alert
           })
       } 
    }
    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                errorForm: state.errorForm,
                project: state.project,
                message: state.message,
                showForm,
                getProjects,
                addProject,
                showError,
                projectSelected,
                deleteProject,
            }}
        >
            {props.children}
        </projectContext.Provider>
        )
}

export default ProjectState;
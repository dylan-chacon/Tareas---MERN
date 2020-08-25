import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import userAxios from '../../config/axios';
import {
    PROJECT_TASKS,
    ADD_TASK,
    CHECK_TASK,
    DELETE_TASK,
    TASK_STATE,
    TASK_SELECTED,
    EDIT_TASK,
    CLEAN_TASK,
} from '../../types';

const TaskState = props => {
    const initialState = {
        taskProject: [],
        taskError: false,
        taskSelected: null,
    }
    //reducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);
//CRUD
    //obtener Tareas de un proyecto
    const getTasks = async project => {
        try {
            const res = await userAxios.get('/api/tasks', {params: {project}});
            dispatch({
                type: PROJECT_TASKS,
                payload: res.data.tasks
            });
        } catch (error) {
            
        }
    }
    //agregar tarea
    const addTask = async task => {
        try {
            const res = await userAxios.post('api/tasks', task)
            dispatch({
                type: ADD_TASK,
                payload: res.data.task
            })
        } catch (error) {
            
        }
    }
    //validar tarea mostrar error
    const checkTask = () => {
        dispatch({
            type: CHECK_TASK
        })
    }
    //eliminar tarea
    const deleteTask = async (id, project) => {
        try {
            await userAxios.delete(`/api/tasks/${id}`, {params: {project}})
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            
        }
    }
    //Seleccionar tarea
    const selectTask = task => {
        dispatch({
            type: TASK_SELECTED,
            payload: task
        })
    }
    //Editar tarea
    const editTask = async task => {
        try {
            const res = await userAxios.put(`/api/tasks/${task._id}`, task);
            dispatch({
                type: EDIT_TASK,
                payload: res.data.task
            })
        } catch (error) {
            
        }
    }
    //limpiar tarea
    const clearTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }
    return (
        <TaskContext.Provider
            value={{
                taskProject: state.taskProject,
                taskError: state.taskError,
                taskSelected: state.taskSelected,
                getTasks,
                deleteTask,
                editTask,
                clearTask,
                checkTask,
                addTask,
                selectTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
 
export default TaskState;
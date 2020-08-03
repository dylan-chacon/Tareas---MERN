import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { v4 as uuidv4 } from 'uuid';
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
        tasks: [
            { id: 1, name: 'leer', state: true, projectId: 1 },
            { id: 2, name: 'soplar', state: false, projectId: 2 },
        ],
        taskProject: null,
        taskError: false,
        taskSelected: null,
    }
    //reducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);
//CRUD
    //obtener Tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        });
    }
    //agregar tarea
    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }
    //validar tarea mostrar error
    const checkTask = () => {
        dispatch({
            type: CHECK_TASK
        })
    }
    //eliminar tarea
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
    //Cambiar estado de tarea
    const changeTaskState = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }
    //Seleccionar tarea
    const selectTask = task => {
        dispatch({
            type: TASK_SELECTED,
            payload: task
        })
    }
    //Editar tarea
    const editTask = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
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
                tasks: state.tasks,
                taskProject: state.taskProject,
                taskError: state.taskError,
                taskSelected: state.taskSelected,
                getTasks,
                deleteTask,
                editTask,
                clearTask,
                checkTask,
                addTask,
                changeTaskState,
                selectTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
 
export default TaskState;
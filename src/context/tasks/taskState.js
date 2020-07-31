import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    PROJECT_TASKS,
    ADD_TASK,
    CHECK_TASK,
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'leer', state: true, projectId: 1 },
            { name: 'soplar', state: false, projectId: 2 },
        ],
        taskProject: null,
        taskError: false
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
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                taskProject: state.taskProject,
                taskError: state.taskError,
                getTasks,
                checkTask,
                addTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
 
export default TaskState;
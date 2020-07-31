import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    PROJECT_TASKS,
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'leer', state: true, projectId: 1 },
            { name: 'soplar', state: false, projectId: 2 },
        ],
        taskProject: null,
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
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                taskProject: state.taskProject,
                getTasks,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
 
export default TaskState;
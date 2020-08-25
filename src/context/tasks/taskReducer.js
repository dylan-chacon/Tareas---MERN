import {
    PROJECT_TASKS,
    ADD_TASK,
    CHECK_TASK,
    DELETE_TASK,
    TASK_SELECTED,
    EDIT_TASK,
    CLEAN_TASK,
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                taskProject: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                taskError: false,
                taskProject: [ action.payload, ...state.taskProject]
            }
        case CHECK_TASK:
            return {
                ...state,
                taskError: true
            }
        case DELETE_TASK:
            return {
                ...state,
                taskProject: state.taskProject.filter(task =>
                    task._id !== action.payload    
                )
            }
        case TASK_SELECTED:
            return {
                ...state,
                taskSelected: action.payload
            }
        case EDIT_TASK:
            return {
                ...state,
                taskProject: state.taskProject.map(task =>
                    task._id === action.payload._id ? action.payload : task   
                )
            }
        case CLEAN_TASK:
            return {
                ...state,
                taskSelected: null
            }
        default:
            return state;
    }
}
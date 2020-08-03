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

export default (state, action) => {
    switch(action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                taskProject: state.tasks.filter(task =>
                    task.projectId === action.payload
                )
            }
        case ADD_TASK:
            return {
                ...state,
                taskError: false,
                tasks: [ action.payload, ...state.tasks]
            }
        case CHECK_TASK:
            return {
                ...state,
                taskError: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task =>
                    task.id !== action.payload    
                )
            }
        case TASK_STATE:
            return {
                ...state,
                tasks: state.taskProject.map(task =>
                    task.id === action.payload.id ? action.payload : task   
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
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task   
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
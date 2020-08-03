import {
    PROJECT_TASKS,
    ADD_TASK,
    CHECK_TASK,
    DELETE_TASK,
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
        default:
            return state;
    }
}
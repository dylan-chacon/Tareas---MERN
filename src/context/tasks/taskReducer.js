import {
    PROJECT_TASKS,
    ADD_TASK,
    CHECK_TASK,
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
                tasks: [...state.tasks,  action.payload]
            }
        case CHECK_TASK:
            return {
                ...state,
                taskError: true
            }
        default:
            return state;
    }
}
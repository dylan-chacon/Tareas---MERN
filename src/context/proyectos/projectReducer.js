import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    CHECK_FORM,
    PROJECT_SELECTED
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                errorForm: false
            }
        case CHECK_FORM:
            return {
                ...state,
                errorForm: true
            }
        case PROJECT_SELECTED:
            return {
                ...state,
                project: state.projects.filter(project =>
                    project.id === action.payload
                )
            }
        default:
            return state;
    }
}
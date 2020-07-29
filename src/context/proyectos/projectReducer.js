import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    CHECK_FORM
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
        default:
            return state;
    }
}
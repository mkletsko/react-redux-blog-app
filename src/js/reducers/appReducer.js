import {LOAD_FORM} from '../actions/AppActions';

const initialState = {
    formID: null,
    viewMode: null
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FORM:
            return {...state, viewMode: action.viewMode, formID: action.formID};
        default:
            return state;
    }
}
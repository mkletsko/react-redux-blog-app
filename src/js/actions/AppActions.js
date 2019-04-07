export const LOAD_FORM = 'LOAD_FORM';

export function loadForm(viewMode, formID) {
    return dispatch => {
        dispatch({
            type: LOAD_FORM,
            formID,
            viewMode
        });
    };
}
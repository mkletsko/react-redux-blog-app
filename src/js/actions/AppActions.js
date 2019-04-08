export const LOAD_FORM = 'LOAD_FORM';

/**
 * Opening modal window in needed mode
 * @param {string} viewMode
 * @param {number} formID
 * @return {function}
 */
export function loadForm(viewMode, formID) {
    return dispatch => {
        dispatch({
            type: LOAD_FORM,
            formID,
            viewMode
        });
    };
}
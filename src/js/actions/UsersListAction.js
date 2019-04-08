import {httpRequest} from '../helpers/httpRequest';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

/**
 * Running server's operation for loading users list
 * @return {function}
 */
export function loadUsers() {
    return async (dispatch) => {
        const users = await httpRequest({
            url: `users/`
        });

        dispatch({
            type: LOAD_USER_SUCCESS,
            usersList: users
        });
    }
}
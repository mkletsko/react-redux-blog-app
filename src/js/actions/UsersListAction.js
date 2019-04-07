import {Config} from '../config/config';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

export function loadUsers() {
    return (dispatch) => {
        fetch(`${Config.apiUrl}/users/`)
            .then(response => response.json())
            .then(users => {

                dispatch({
                    type: LOAD_USER_SUCCESS,
                    usersList: users
                });

            });
    }
}
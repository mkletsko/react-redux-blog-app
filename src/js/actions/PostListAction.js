import {Config} from '../config/config';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_ERROR = 'LOAD_ERROR';

export function loadPosts(userID) {
    return (dispatch) => {
        fetch(`${Config.apiUrl}/posts?userId=${userID}`)
            .then(response => response.json())
            .then(json => {

                dispatch({
                    type: LOAD_SUCCESS,
                    payload: json
                });

            });
    }
}

export function removePost(formID) {
    return (dispatch) => {
        fetch(`${Config.apiUrl}/posts/${formID}`, {
            method: 'DELETE'
        }).then(response => {
            dispatch({
                type: LOAD_POSTS,
                isUpdate: true
            });
        });
    }
}
import {httpRequest} from '../helpers/httpRequest';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

/**
 * Loading data posts for current user
 * @param {number} userID
 * @return {function}
 */
export function loadPosts(userID) {
    return async (dispatch) => {
        const posts = await httpRequest({
            url: `posts?userId=${userID}`
        });

        dispatch({
            type: LOAD_SUCCESS,
            payload: posts
        });
    };
}

/**
 * Running server's operation for deleting current post
 * @param {number} formID
 * @return {function}
 */
export function removePost(formID) {
    return async (dispatch) => {
        await httpRequest({
            url: `posts/${formID}`,
            body: {
                method: 'DELETE'
            }
        });

        dispatch({
            type: LOAD_POSTS,
            isUpdate: true
        });
    }
}
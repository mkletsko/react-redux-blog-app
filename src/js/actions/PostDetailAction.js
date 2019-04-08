import {httpRequest} from '../helpers/httpRequest';
import {LOAD_POSTS} from './PostListAction';

export const LOAD_POST_DETAIL = 'LOAD_POST_DETAIL';
export const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_TEXT = 'CHANGE_TEXT';

/**
 * Loading data for current post and comments for post
 * @param {number} formID
 * @return {function}
 */
export function loadPostDetail(formID) {
    return async (dispatch) => {
        const detail = await httpRequest({
            url: `posts/${formID}`
        });
        const comments = await httpRequest({
            url: `posts/${formID}/comments?postId=${formID}`,
            operation: 'read'
        });


        dispatch({
            type: LOAD_DETAIL_SUCCESS,
            detail,
            comments
        });
    }
}

/**
 * Set mode for display modal window
 * @param {boolean} isShowModal
 * @return {function}
 */
export function showModal(isShowModal) {
    return dispatch => {
        dispatch({
            type: SHOW_MODAL,
            isShowModal
        });
    };
}

/**
 * Setting for reducer entered data in title field for new post
 * @param {string} postTitleValue
 * @return {function}
 */
export function handleChangeTitle(postTitleValue) {
    return dispatch => {
        dispatch({
            type: CHANGE_TITLE,
            postTitleValue
        });
    };
}

/**
 * Setting for reducer entered data in text field for new post
 * @param {string} postTextValue
 * @return {function}
 */
export function handleChangeText(postTextValue) {
    return dispatch => {
        dispatch({
            type: CHANGE_TEXT,
            postTextValue
        });
    };
}

/**
 * Running server's operation for saving new post
 * @param {string} title
 * @param {string} text
 * @param {number} userID
 * @return {function}
 */
export function saveNewPost({title = '', text = '', userID}) {
    return async (dispatch) => {
        await httpRequest({
            url: `posts/`,
            body: {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: text,
                    userId: userID
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        });

        dispatch({
            type: LOAD_POSTS,
            isUpdate: true
        });
    }
}
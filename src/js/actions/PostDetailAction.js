import {Config} from '../config/config';
import {LOAD_POSTS} from "./PostListAction";

export const LOAD_POST_DETAIL = 'LOAD_POST_DETAIL';
export const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS';

export function loadPostDetail(formID) {
    return (dispatch) => {

        fetch(`${Config.apiUrl}/posts/${formID}`)
            .then(response => response.json())
            .then(detail => {


                fetch(`${Config.apiUrl}/posts/${formID}/comments?postId=${formID}`)
                    .then(response => response.json())
                    .then(comments => {

                        dispatch({
                            type: LOAD_DETAIL_SUCCESS,
                            detail,
                            comments
                        });
                    });
            });
    }
}

export function showModal(isShowModal) {
    return dispatch => {
        dispatch({
            type: SHOW_MODAL,
            isShowModal
        });
    };
}

export function handleChangeTitle(postTitleValue) {
    return dispatch => {
        dispatch({
            type: CHANGE_TITLE,
            postTitleValue
        });
    };
}

export function handleChangeText(postTextValue) {
    return dispatch => {
        dispatch({
            type: CHANGE_TEXT,
            postTextValue
        });
    };
}

export function saveNewPost({title = '', text = '', userID}) {
    return (dispatch) => {

        fetch(`${Config.apiUrl}/posts/`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: text,
                userId: userID
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: LOAD_POSTS,
                    isUpdate: true
                });
            });
    }
}
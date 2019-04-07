import {
    LOAD_POST_DETAIL,
    LOAD_DETAIL_SUCCESS,
    SHOW_MODAL,
    CHANGE_TITLE,
    CHANGE_TEXT
} from '../actions/PostDetailAction';

const initialState = {
    isLoading: true,
    detail: {},
    comments: [],
    isShowModal: false,
    postTitleValue: '',
    postTextValue: '',
};

export function postDetailReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POST_DETAIL:
            return {...state, detail: action.detail, isShowModal: true, isLoading: true};
        case LOAD_DETAIL_SUCCESS:
            return {...state, detail: action.detail, comments: action.comments, isLoading: false, isShowModal: true};
        case SHOW_MODAL:
            return {...state, isShowModal: action.isShowModal, detail: {}, comments: []};
        case CHANGE_TITLE:
            return {...state, postTitleValue: action.postTitleValue};
        case CHANGE_TEXT:
            return {...state, postTextValue: action.postTextValue};
        default:
            return state;
    }
}
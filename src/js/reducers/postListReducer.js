import {LOAD_POSTS, LOAD_SUCCESS} from '../actions/PostListAction';

export const initialState = {
    isLoading: true,
    postList: [],
    isUpdate: false
};

export function postListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, postList: [], isLoading: true, isUpdate: action.isUpdate};
        case LOAD_SUCCESS:
            return {...state, postList: action.payload, isLoading: false, isUpdate: false};
        default:
            return state;
    }
}
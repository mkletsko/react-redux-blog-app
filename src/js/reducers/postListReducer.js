import { LOAD_POSTS, LOAD_SUCCESS, LOAD_ERROR } from "../actions/PostListAction";

const initialState = {
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
        case LOAD_ERROR:
            return {...state, postList: [], isLoading: false};
        default:
            return state;
    }
}
import {postListReducer, initialState} from '../../reducers/postListReducer';
import {LOAD_POSTS, LOAD_SUCCESS} from '../../actions/PostListAction';

describe('postList reducer', () => {
    it (LOAD_POSTS, () => {
        const action = {
            type: LOAD_POSTS
        };

        expect(postListReducer(initialState, action)).toEqual({
            isUpdate: action.isUpdate,
            isLoading: true,
            postList: []
        });
    });

    it (LOAD_SUCCESS, () => {
        const stateBefore = {
            isUpdate: false,
            isLoading: true,
            postList: []
        };

        const action = {
            type: LOAD_SUCCESS
        };

        expect(postListReducer(stateBefore, action)).toEqual({
            isLoading: false,
            postList: action.payload,
            isUpdate: false
        });
    });
});
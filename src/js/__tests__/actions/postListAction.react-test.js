import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import {Config} from '../../config/config';
import {LOAD_SUCCESS, loadPosts} from '../../actions/PostListAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('load posts actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates LOAD_SUCCESS when fetching posts has been done', () => {
        const expectedActions = [{
            type: LOAD_SUCCESS,
            payload: {
                posts: {}
            }
        }];
        const store = mockStore({});

        fetchMock.getOnce(`${Config.apiUrl}/posts?userId=1`, {
            body: { posts: {}}
        });

        return store.dispatch(loadPosts(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    })
});
import {combineReducers} from 'redux/es/redux';
import {appReducer} from './appReducer';
import {postListReducer} from './postListReducer';
import {postDetailReducer} from './postDetailReducer';
import {usersListReducer} from './usersListReducer';

export const rootReducer = combineReducers({
        application: appReducer,
        postList: postListReducer,
        postDetail: postDetailReducer,
        usersList: usersListReducer
});
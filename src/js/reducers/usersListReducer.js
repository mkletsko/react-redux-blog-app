import {LOAD_USERS, LOAD_USER_SUCCESS} from "../actions/UsersListAction";

const initialState = {
    isLoading: true,
    usersList: [],
};

export function usersListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, usersList: []};
        case LOAD_USER_SUCCESS:
            return {...state, usersList: action.usersList};
        default:
            return state;
    }
}
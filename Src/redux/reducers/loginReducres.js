/**reducers Is updates the state and responds with the new state */
/**Syntax of reducers */

// const initialState = {
        //manage the state here!!!
//};
// const Reducer = (state = initialState, action) => {
//    // Write your code here
// }

import { loginActionTypes } from '../types';

const initialState = {
    usersList:{},
    error: false,
    isModalVisible: false,

};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginActionTypes.LOGIN_REQUEST:
            return { ...state, usersList:{}, error: false, isModalVisible: true,}
            case loginActionTypes.LOGIN_SUCCESS:
            return { ...state, usersList: action.payload, error: false,}
            case loginActionTypes.LOGIN_FAILURE:
            return { ...state, usersList: {}, error: true, isModalVisible: false,}
        default:
            return state;
    }
};

export default loginReducer;
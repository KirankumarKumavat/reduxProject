import { signupActionTypes } from '../types';

const initialState = {
    usersList:{},
    isModalVisible: false,
    error: false,
};

function SignUpReducers(state = initialState, action) {
    switch (action.type) {
        case signupActionTypes.SIGNUP_REQUEST:
            return { ...state, usersList:{}, error: false, isModalVisible: true }
            case signupActionTypes.SIGNUP_SUCCESS:
            return { ...state, usersList: action.payload, error: false, isModalVisible: false }
            case signupActionTypes.SIGNUP_FAILURE:
            return { ...state, usersList: {}, error: true, isModalVisible: false }
        default:
            return state;
    }
};
export default SignUpReducers;
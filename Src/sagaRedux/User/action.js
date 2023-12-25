/** Syntax of action manage state and data. */
// const Actions = {
//    type: '',
//    payload: ''
//   }

import { put, takeLatest } from 'redux-saga/effects';
import { loginActionTypes } from '../User/types'
import { signupActionTypes } from '../User/types'

function* signupActionTypes({ payload }) {
  try {
    const response = yield signupActionTypes(payload);
    yield put({ type: 'SIGNUP_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'SIGNUP_FAILURE', error: error.message });
  }
}

export default function* signupScreenSaga() {
  yield takeLatest('SIGNUP_REQUEST', signupActionTypes);
}

function* loginActionTypes({ payload }) {
  try {
    const response = yield loginActionTypes(payload);
    yield put({ type: 'LOGIN_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error: error.message });
  }
}

export default function* loginActionTypes() {
  yield takeLatest('LOGIN_REQUEST', loginActionTypes);
}


// /**login module related action */
// export const loginRequest = (payload) => ({
//    type: loginActionTypes.LOGIN_REQUEST,
//    payload,
// })

// export const loginSuccess = (payload) => ({
//    type: loginActionTypes.LOGIN_SUCCESS,
//    payload,
// })

// export const loginFailure = (payload) => ({
//    type: loginActionTypes.LOGIN_FAILURE,
//    payload,
// })

// export const loginResetData =() => ({
//       type: loginActionTypes.LOGIN_RESET_DATA,
//    })

// /**SignUp module related action */
// export const signupRequest  = (payload) => ({
//    type: signupActionTypes.SIGNUP_REQUEST,
//    payload,
// })

// export const signupSuccess = (payload) => ({
//    type: signupActionTypes.SIGNUP_SUCCESS,
//    payload,
// })

// export const signupFailure = (payload) => ({
//    type: signupActionTypes.SIGNUP_FAILURE,
//    payload,
// })

// export const signupResetData =() => ({
//       type: signupActionTypes.SIGNUP_RESET_DATA,
//    })
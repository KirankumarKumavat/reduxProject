/** Syntax of action manage state and data. */
// const Actions = {
//    type: '',
//    payload: ''
//   }

import { loginActionTypes } from '../redux/types'
import { signupActionTypes } from '../redux/types'

/**login module related action */
export const loginRequest = (payload) => ({
   type: loginActionTypes.LOGIN_REQUEST,
   payload,
})

export const loginSuccess = (payload) => ({
   type: loginActionTypes.LOGIN_SUCCESS,
   payload,
})

export const loginFailure = (payload) => ({
   type: loginActionTypes.LOGIN_FAILURE,
   payload,
})

export const loginResetData =() => ({
      type: loginActionTypes.LOGIN_RESET_DATA,
   })

/**SignUp module related action */
export const signupRequest  = (payload) => ({
   type: signupActionTypes.SIGNUP_REQUEST,
   payload,
})

export const signupSuccess = (payload) => ({
   type: signupActionTypes.SIGNUP_SUCCESS,
   payload,
})

export const signupFailure = (payload) => ({
   type: signupActionTypes.SIGNUP_FAILURE,
   payload,
})

export const signupResetData =() => ({
      type: signupActionTypes.SIGNUP_RESET_DATA,
   })


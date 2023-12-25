import {all} from 'redux-saga/effects';
import { loginActionTypes } from '../User/types'
import { signupActionTypes } from '../User/types'
function* rootSaga() {
 yield all([loginActionTypes(), signupActionTypes()]);
}
 
export default rootSaga;
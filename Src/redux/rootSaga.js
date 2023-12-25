import {all} from 'redux-saga/effects';
import loginReducer from '../redux/reducers/loginReducres';
import SignUpReducers from './reducers/SignUpReducers';

function* rootSaga() {
 yield all([loginReducer(), SignUpReducers()]);
}
 
export default rootSaga;
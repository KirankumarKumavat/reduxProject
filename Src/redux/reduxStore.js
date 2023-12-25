import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from '../redux/reducers/loginReducres';
import SignUpReducers from './reducers/SignUpReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootSaga from './rootSaga';

/**Simple redux */
const rootReducer = combineReducers({
   loginState: loginReducer,
   signupState: SignUpReducers,
})

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
// const store = createStore(loginReducer, applyMiddleware(...middlewares));
// sagaMiddleware.run(rootSaga);
// export {store};         

/**Redux thunk code */
// export const Store = createStore(
//    persistReducer({
//       key: 'root',
//       storage: AsyncStorage,
//       blacklist: ['loginState', 'signupState'],
//       stateReconciler: autoMergeLevel2,
//       version: 0,
//    },
//       rootReducer
//    ),
//    __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk),
// );

export default rootReducer;

/**Thunck Saga */
// export const persister = persistStore(Store);
// export const store = createStore(
//    rootReducer,
//    __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk),
// );

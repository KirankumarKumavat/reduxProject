import { createStore, combineReducers} from 'redux';
import {mainReducer} from './reducers';

const rootReducer = combineReducers({
    counter: mainReducer,
  });
 
export const store = createStore(rootReducer); 



// import { createStore, combineReducers} from 'redux';
// import {burgerReducer} from './reducers';

// const rootReducer = combineReducers({
//   numberOfBurger: burgerReducer,
//   });


// export const store = createStore(rootReducer); 
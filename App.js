import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Router from './Src/navigation/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduxStore from './Src/redux/reduxStore';
// import rootreducers from './Src/sagaRedux/root-reducers'
const store = createStore(reduxStore)

export default function App({ route, navigation }) {
  return (
    <Provider store={store}>
      {/* <rootreducers/> */}
     <Router />
    </Provider>
  );
}

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import Counter from './Src/Store/Counter';
// import { Provider } from 'react-redux';
// import { store } from './Src/Store/store';

// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       <Provider store={store}>
//       <Counter></Counter>
//       </Provider>
//     </View>
//   );
// }
// export default App;

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import Counter from './Src/Store/Counter';
// import { Provider } from 'react-redux';
// import { store } from './Src/Store/store';

// const App = () => {
//   return (
//     <View style={{flex:1}}>
//       <Provider store={store}>
//       <Counter></Counter>
//       </Provider>
//     </View>
//   );
// }
// export default App;


// import * as React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return (
//     <View style={{flex:1}}>
      
//     </View>
//   );
  
// }

// /**
//  *
// function* generator(i){
//   yield i;
//   yield i+20;
// }
// const gen = generator(20)
// console.log('fdhfjdfhhj',gen.next().value);

// console.log(gen.next().value); 
//  *
//  */

// // function* idmaker(){
// //   let index = 0;
// //   while(true){
// //     yield index++;
// //   }
// // }
// //   const gen= idmaker();

// //   console.log('1st comes',gen.next().value);
// //   console.log('2nd comes',gen.next().value);
// //   console.log('3nd comes',gen.next().value);
// //   console.log('4nd comes',gen.next().value);

// function* generator(){

//   yield "y";
//   return "s";
//   yield "unreachable";

//   // console.log('0');
//   // console.log('1',yield);
//   // console.log('2',yield);
//   // console.log('3',yield);
// }

// const gen = generator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log('get the vqalue',gen.next().value);

// class app{
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//   }
// }

// class testApp{
//   *[Symbol.iterator]() {
//     yield 'a';
//     yield 'b';
//   }
// }

// console.log('comes the data for aa',Array.from(new app));
// console.log('comes data for bb',Array.from(new testApp));

// export default App;

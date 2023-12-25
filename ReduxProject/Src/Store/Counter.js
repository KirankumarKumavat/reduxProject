import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subscription } from "./action";

const Counter = () => {
  const data = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <TouchableOpacity
        style={{ borderWidth: 1, height: 40, borderRadius: 10, backgroundColor: 'grey', width: '50%' }}
        onPress={() => dispatch(addition())}>
        <Text style={{ color: 'white', fontSize: 20, marginVertical: 5, alignSelf: 'center' }}>{'Increment'}</Text>
      </TouchableOpacity>

      <Text style={{ color: 'grey', fontSize: 20, marginTop: 25, }}>{data}</Text>
      
      <TouchableOpacity
        style={{ borderWidth: 1, height: 40, borderRadius: 10, marginTop: 50, backgroundColor: 'grey', width: '50%' }}
        onPress={() => dispatch(subscription())}>
        <Text style={{ color: 'white', fontSize: 20, marginVertical: 5, alignSelf: 'center' }}>{'Decrement'}</Text>
      </TouchableOpacity>
      
    </View>
  );
}

export default Counter;

// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { increaseBurgeraction, DecreaseBurgeraction } from "./index";
// import { connect } from 'react-redux'

// class Counter extends Component {

//   render() {

//     const data = useSelector((state) => state.numberOfBurger.numberOfBurger)

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

//         <TouchableOpacity
//           style={{ borderWidth: 1, marginTop: '95%', height: 40, borderRadius: 10, backgroundColor: 'grey', width: '50%' }}
//           onPress={() => { this.props.increaseBurger(5) }}>
//           <Text style={{ color: 'white', fontSize: 20, marginVertical: 5, alignSelf: 'center' }}>{'Increment'}</Text>
//         </TouchableOpacity>

//         <Text style={{ color: 'grey', fontSize: 20, marginTop: 25, }}> Number Of Burger = {data} </Text>

//         {/* <Text >number of burger={this.props.numberOfBurger}</Text> */}

//         <TouchableOpacity
//           style={{ borderWidth: 1, height: 40, borderRadius: 10, marginTop: 50, backgroundColor: 'grey', width: '50%' }}
//           onPress={() => { this.props.decreaseBurger() }} >
//           <Text style={{ color: 'white', fontSize: 20, marginVertical: 5, alignSelf: 'center' }}>{'Decrement'}</Text>
//         </TouchableOpacity>

            // <TouchableOpacity
//           style={{ borderWidth: 1, height: 40, borderRadius: 10, marginTop: 50, backgroundColor: 'grey', width: '50%' }}
//           onPress={() => { this.props.increaseBurgeraction() }} >
//           <Text style={{ color: 'white', fontSize: 20, marginVertical: 5, alignSelf: 'center' }}>{'Increase'}</Text>
//         </TouchableOpacity> 

//       </View>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     numberOfBurger: state.numberOfBurger
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseBurger: (parameter) => { dispatch(increaseBurgeraction(parameter)) },
//     decreaseBurger: () => { dispatch(DecreaseBurgeraction()) }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);




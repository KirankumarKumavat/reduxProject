import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';
import TextInputWithLabel from '../../Componenets/TextInputWithLabel';
import ButtonsWithLoder from '../../Componenets/ButtonsWithLoder';
import UserService from '../../api/UserService';
import { useSelector, useDispatch } from 'react-redux';
import BallIndicator from '../../Componenets/BallIndicator';
import showSimpleAlert from '../../utils/showSimpleAlert'

export default function LoginScreen({ route, navigation }) {
    //Thv30@getnada.com
    const dispatch = useDispatch();
    // Slice the data from the store using useSelector
    const usersInfo = useSelector((state) => state.loginState);
    const [state, setState] = useState({
        isSecure: true,
        email: '',
        isModalVisible: false,
        password: ''
    })

    useEffect(() => {
        console.log('usersInfo', usersInfo);
    }, [dispatch, usersInfo])

    const handleChangeOfText = (key, value) => {
        setState(oldState => ({
            ...oldState,
            [key]: value,
        }));
    };

    const SignInAPI = async () => {
        setState(oldState => ({
            ...oldState,
            isModalVisible: true
        }));

        let params = {
            register_type: '1',
            email: state.email,
            password: state.password,
            google_id: '',
            facebook_id: '',
            apple_id: ''
        }
        /** use functions userServices files */
       UserService.loadUsers(dispatch, params);  
        // setState(oldState => ({
        //     ...oldState,
        //     isModalVisible: true
        // }));
        navigation.navigate('ProfileScreen')
    //     if(response){
    //     showSimpleAlert(response.message)
    //    }
    }

    const validationofLogin = () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        const strongRegexpass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

        if (state.email === '') {
            Alert.alert('Please enter email')
            return false;
        }
        else if (!strongRegex.test(state.email)) {
            Alert.alert('please enter a valid email')
            return false;
        }
        else if (state.password === '') {
            Alert.alert('Please enter password')
            return false;
        }
        else if (!strongRegexpass.test(state.password)) {
            Alert.alert('please enter alpha-numeric password with one capital, one small, one digit, and one special character. The password must be a min of 6 and a max of 18 characters.')
            return false;
        }
        else {
            SignInAPI()
        }
    }



    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: 'grey', marginBottom: 50 }}>{'LoginScreen'}</Text>
            <View style={styles.BottomView}>
                <View style={{ marginTop: 30, marginHorizontal: 30 }}>
                    <TextInputWithLabel
                        label={'Email'}
                        placeholder={'Enter a mail'}
                        value={state.email}
                        onChangeText={(text) => handleChangeOfText("email", text)}
                    />
                    <TextInputWithLabel
                        label={'Password'}
                        placeholder={'Enter a Password'}
                        secureTextEntry={state.isSecure}
                        value={state.password}
                        onChangeText={(text) => handleChangeOfText("password", text)}
                    />
                    <View style={{ marginTop: 50 }}>
                        <ButtonsWithLoder
                            onPress={() => validationofLogin()}
                            text={'LOGIN'}
                        />
                        <ButtonsWithLoder
                            onPress={() => navigation.navigate('SignUp')}
                            text={'SignUp'}
                        />
                    </View>
                </View>
            </View>
            {state.isModalVisible &&
                <BallIndicator visible={state.isModalVisible} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00D6B5',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    BottomView: {
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        borderTopRightRadius: 44,
        borderTopLeftRadius: 44,
    },
})

// export default LoginScreen;

/**Maping code */
// import React, { useEffect, useState } from 'react';
// import { Switch, Text, View, } from 'react-native';
// import  MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';

// const LoginScreen = () => {
//   const [state,setState] = useState({
//     region:'',
//     markers:''
//   })

//   useEffect(() => {
//   }, []);

//   const getInitialState = () => {
//     return {
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
//     };
//   }

//   const onRegionChange = (region) => {
//     setState({ region });
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <MapView
//         region={setState.region}
//         onRegionChange={onRegionChange}
//       >
//         <Marker
//           // key={index}
//           // coordinate={marker.latlng}
//           // title={marker.title}
//           // description={marker.description}
//         />
//       <Text>Click to enable BackgroundGeolocation</Text>
//       {/* <Switch value={enabled} onValueChange={setEnabled} /> */}
//       <Text style={{ fontSize: 12 }}>{location}</Text>
//       </MapView>
//     </View>
//   )
// }

// export default LoginScreen;
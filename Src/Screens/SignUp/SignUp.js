import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../Componenets/TextInputWithLabel';
import ButtonsWithLoder from '../../Componenets/ButtonsWithLoder';
import UserService from '../../api/UserService';
import { useSelector, useDispatch } from 'react-redux';
// import profile from '../profile/profile'
export default function HomeScreen({ route, navigation }) {
    const dispatch = useDispatch();
    // Slice the data from the store using useSelector
    const usersInfo = useSelector((state) => state.signupState);
    
    const [state, setState] = useState({
        isLoading: true,
        isSecure: true,
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log('usersInfo', usersInfo);
    }, [dispatch,usersInfo])

    const handleChangeOfText = (key, value) => {
        setState(oldState => ({
            ...oldState,
            [key]: value,
        }));
    };

    const SginUP = () => {
        let params = {
            email: state.email,
            password: state.password,
            google_id: '',
            facebook_id: '',
            register_type: '1',
            apple_id: ''
        }
        UserService.signupUsers(dispatch, params);
        navigation.navigate('ProfileScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: 'grey', marginBottom: 50 }}>{'SignUpScreen'}</Text>
            <View style={styles.BottomView}>
                <View style={{ marginTop: 30, marginHorizontal: 30 }}>

                    <TextInputWithLabel
                        label={'User name'}
                        placeholder={'Enter a your username'}
                        value={state.username}
                        onChangeText={(text) => handleChangeOfText("username", text)}
                    />
                    <TextInputWithLabel
                        label={'Email'}
                        placeholder={'Enter a email'}
                        value={state.email}
                        onChangeText={(text) => handleChangeOfText("email", text)}
                    />
                    <TextInputWithLabel
                        label={'Password'}
                        placeholder={'Enter a password'}
                        secureTextEntry={state.isSecure}
                        value={state.password}
                        onChangeText={(text) => handleChangeOfText("password", text)}
                    />
                    <ButtonsWithLoder
                        onPress={() => SginUP()}
                        text={'SignUp'}
                    />
                </View>
            </View>
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

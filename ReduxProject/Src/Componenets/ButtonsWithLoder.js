import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const ButtonsWithLoder = ({
    text,
    onPress,
    ...props
}) => {
    return (
        <View style={{}}>
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <Text style={{ fontSize: 20, color: 'grey' }}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 20,
        height: 50,
        borderRadius: 12,
        width: Dimensions.get('window').width - 50,
        borderColor: 'grey',
        backgroundColor: '#00D6B5',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ButtonsWithLoder;
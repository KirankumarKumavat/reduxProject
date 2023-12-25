import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput,Dimensions } from 'react-native';

const TextInputWithLabel = ({
    label,
    value,
    isSecure,
    placeHolder,
    onChangeText,
    ...props
}) => {
    return (
        <View style={{ }}>
            <Text style={{ marginLeft: props.search ? 140 : 0,  fontFamily: 'Helvetica', fontSize: 20, color: 'grey', marginVertical: 5,marginTop:20}}>{label}</Text>
            <TextInput
                value={value}
                placeHolder={placeHolder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                placeholderTextColor={'grey'}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        borderWidth: 1,
        borderRadius: 12,
        width: Dimensions.get('window').width - 50,
        borderColor: 'grey',
        color: 'black',
        paddingHorizontal: 15
    },
   
})

export default TextInputWithLabel;
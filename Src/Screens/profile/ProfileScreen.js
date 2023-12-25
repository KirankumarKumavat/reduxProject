import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
    const [state, setState] = useState({

    })

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: 'grey', marginBottom: 50 }}>{'HomeScreen'}</Text>
            <View style={styles.BottomView}>
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

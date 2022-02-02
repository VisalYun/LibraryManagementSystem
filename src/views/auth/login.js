import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyle from '../../style/globalStyle';

const LoginScreen = ({navigation, route}) => {
    const setIsLogin = route.params.setIsLogin
    return (
        <View style={globalStyle.container}>
            <Text>Login Screen</Text>
            <TouchableOpacity 
                onPress={() => {
                    setIsLogin(true);
                }
            }>
                <Text style={globalStyle.btn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={globalStyle.btn}>Register Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;
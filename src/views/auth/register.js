import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyle from '../../style/globalStyle';

const RegisterScreen = ({navigation, route}) => {
    const setIsLogin = route.params.setIsLogin
    return (
        <View style={globalStyle.container}>
            <Text>Register Screen</Text>
            <TouchableOpacity 
                onPress={() => {
                    setIsLogin(true);
                }
            }>
                <Text style={globalStyle.btn}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen;
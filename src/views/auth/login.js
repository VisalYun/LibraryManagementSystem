import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import globalStyle from '../../style/globalStyle';

const LoginScreen = ({navigation, route}) => {
    const setIsLogin = route.params.setIsLogin
    
    return (
        <View style={globalStyle.container}>
            <View style={styles.header}>
                <Text style={styles.boldText}>KIT Library</Text>
                <Text style={styles.login}>Login Screen</Text>
            </View>
            <View style={styles.inputText}>
                <View style={styles.EmailView}>
                    <Text style={styles.EmailText}>Email</Text>
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Email....."
                        placeholderTextColor="#101010"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.PasswordView}>
                    <Text style={styles.PasswordText}>Password</Text>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password....."
                        placeholderTextColor="#101010"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
            </View>
            <TouchableOpacity 
                onPress={() => {
                    setIsLogin(true);
                }
            }>
            <Text style={globalStyle.btn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.text}>No account, <Text style={globalStyle.btnRegister}>Register Screen</Text></Text> 
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
    },
    boldText: {
        color: '#00C2FF',
        fontSize: 30,
        fontWeight:'bold'
    },
    login: {
        color: '#00C2FF',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop:10
    },
    EmailText: {
        fontSize: 15,
        color: '#00C2FF',
        marginTop: 30
    },
    inputEmail: {
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20,
        borderColor: '#E0E0E0',
        padding:10,
        backgroundColor: '#E0E0E0',

    },
    PasswordText: {
        fontSize: 15,
        color: '#00C2FF',
        marginTop: 30
    },
    inputPassword: {
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20,
        borderColor: '#E0E0E0',
        padding:10,
        backgroundColor: '#E0E0E0',
        
    },
    text: {
        color:'black',
        marginTop:10
    },
})
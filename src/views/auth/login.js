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
                <View style={styles.ButtonView}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>No account, <Text style={styles.register}>register here</Text></Text>
                </View>
            </View>
            {/* <TouchableOpacity 
                onPress={() => {
                    setIsLogin(true);
                }
            }>
                <Text style={globalStyle.btn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={globalStyle.btn}>Register Screen</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
    },
    boldText: {
        color: '#00b8e6',
        fontSize: 30,
        fontWeight:'bold'
    },
    login: {
        color: '#00b8e6',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop:10
    },
    EmailText: {
        fontSize: 15,
        color: '#00b8e6',
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
        color: '#00b8e6',
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
    register: {
        color: '#00b8e6'
    },
    loginBtn: {
        borderRadius: 10,
        backgroundColor: '#00b8e6',
        marginTop:30,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        // width: Dimensions.get("window").width - 100,
    }
})
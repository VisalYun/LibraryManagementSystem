import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyle from '../../style/globalStyle';

const RegisterScreen = ({navigation, route}) => {
    const setIsLogin = route.params.setIsLogin
    return (
        <View style={globalStyle.container}>
            <Text>Register Screen</Text>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : ""}>
                    <ScrollView contentContainerStyle={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.mainTitle}>KIT Library</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Register</Text>
                            </View>
                            
                            <View style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: -(Dimensions.get("window").height / 4)
                            }}>
                            <View>
                                <Text style={styles.title1}>Username</Text>
                            </View>
                                <TextInput
                                    style={styles.customTextInput}
                                    placeholder="username..."
                                    autoCapitalize="none"
                                />
                            <View>
                                <Text style={styles.title1}>Email</Text>
                            </View>
                                <TextInput
                                    style={styles.customTextInput}
                                    placeholder="email..."
                                />
                            <View>
                                <Text style={styles.title1}>Password</Text>
                            </View>
                                <TextInput
                                    style={styles.customTextInput}
                                    placeholder="password..."
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                />
                                <TouchableOpacity style={styles.btnRegister}>
                                    <Text style={styles.btnText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            <TouchableOpacity 
                onPress={() => {setIsLogin(true);}}>
                <Text style={globalStyle.btn}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "left",
        backgroundColor: "#000000a0"
    },
    logo: {
        width: Dimensions.get("window").width - 150,
        height: Dimensions.get("window").width - 200,
    },
    customTextInput: {
        width: Dimensions.get("window").width - 100,
        height: 44,
        backgroundColor: "#EDEDED",
        borderRadius: 12,
        paddingLeft: 16,
        marginTop: 16,
        fontSize: 16,
        textTransform: 'lowercase'
    },
    btnRegister: {
        height: 44,
        elevation: 8,
        width: Dimensions.get("window").width - 100,
        backgroundColor: "#12D7FF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 16,
        paddingBottom: 10,
    },
    btnText: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 18
    },
    mainTitle: {
        fontSize: 35,
        color:"#12D7FF",
        paddingLeft: 16,
        paddingTop: 80,
        borderRadius: 12,
    }, 
    title: {
        fontSize: 25,
        color: "#12D7FF",
        paddingLeft: 16,
    },
    title1: {
        fontSize: 16,
        color: "#12D7FF",
        paddingLeft: 16,
        marginTop: 16,
        textAlign: "left",
        width: Dimensions.get("window").width - 100,
    
    }
    
});
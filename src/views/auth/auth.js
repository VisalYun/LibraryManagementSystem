import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login';
import RegisterScreen from './register';

const Stack = createNativeStackNavigator();

function AuthView({setIsLogin}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
            },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} initialParams={{setIsLogin}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} initialParams={{setIsLogin}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#00C2FF',
  }
})

export default AuthView;
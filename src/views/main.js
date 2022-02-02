import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home/home';
import BookScreen from './book';

const Stack = createNativeStackNavigator();

function MainView() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'KIT Library' }} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#00C2FF',
  }
})

export default MainView;
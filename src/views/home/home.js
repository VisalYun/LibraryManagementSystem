import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import LibraryScreen from './library';
import AccountScreen from './account';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#00C2FF"
            inactiveColor="#000"
            barStyle={{ backgroundColor: '#fff' }}
        >
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color }) => (
                        <Icon name="book" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-circle" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeScreen;
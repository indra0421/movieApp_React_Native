import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Favorities from './Favorities'; ``
import Settings from './Settings';
import Tv from './Tv';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';


const BottomNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    activeTintColor: '#17bac4',
                    inactiveTintColor: '#627381',
                    tabBarIcon: ({ focused, color, size }) => {

                        if (route.name === 'Home') {
                            return <Icon name="home" size={31} color={color} />
                        } else if (route.name === 'Tv') {
                            return <Icon2 name="live-tv" size={31} color={color} />;
                        } else if (route.name === 'Favorities') {
                            return <Icon2 name="favorite-border" size={31} color={color} />;
                        } else if (route.name === 'Settings') {
                            return <Icon3 name="settings" size={31} color={color} />;
                        }


                    },
                })}
            >

                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Tv" component={Tv} />
                <Tab.Screen name="Favorities" component={Favorities} />
                <Tab.Screen name="Settings" component={Settings} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigator
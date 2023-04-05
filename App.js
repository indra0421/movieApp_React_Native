import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorities from './src/components/Favorities';
import Settings from './src/components/Settings';
import Tv from './src/components/Tv';

import LoginSignupNav from './src/NavItems/LoginSignupNav';
import HomeNavItems from './src/NavItems/HomeNavItems';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='LoginS'

        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "#1c1c27", paddingBottom: 2, borderTopColor: "#1c1c27" },
          activeTintColor: '#107e85',
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

        <Tab.Screen name="Home" component={HomeNavItems} options={{ headerShown: false, statusBarColor: "#1c1c27" }} />

        <Tab.Screen name="LoginS" component={LoginSignupNav} options={{
          headerShown: false, statusBarColor: "#1c1c27", tabBarStyle: { display: 'none' }, tabBarButton: () => null,
          tabBarVisible: false
        }} />


        <Tab.Screen name="Tv" component={Tv}
          options={{ headerStyle: { backgroundColor: "#1c1c27" }, headerTintColor: '#fff' }}
        />
        <Tab.Screen name="Favorities" component={Favorities} options={{ headerStyle: { backgroundColor: "#1c1c27" }, headerTintColor: '#fff' }} />
        <Tab.Screen name="Settings" component={Settings} options={{ headerStyle: { backgroundColor: "#1c1c27" }, headerTintColor: '#fff' }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './../components/Home';

import MoviePage from './../components/MoviePage';
import MovieCard from '../cards/MovieCard';
import MoviesList from '../lists/MoviesList';

import Profile from '../components/Profile';

const HomeNavItems = () => {
    const Stack = createNativeStackNavigator()
    return (

        <Stack.Navigator >

            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, statusBarColor: "#1c1c27" }} />
            <Stack.Screen name="MoviePage" component={MoviePage} options={{ headerShown: false, statusBarColor: "#1c1c27" }} />
            <Stack.Screen name="MoviesList" component={MoviesList} options={{
                statusBarColor: "#1c1c27",
                headerStyle: {
                    backgroundColor: "#1c1c27",

                },
                headerTintColor: 'white'
            }} />

            <Stack.Screen name="MovieCard" component={MovieCard} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, statusBarColor: "#1c1c27" }} />

            {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarColor: "#1c1c27", tabBarStyle: { display: 'none' } }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false,
                statusBarColor: "#1d1e32",
                tabBarStyle: { display: 'none' }
            }} /> */}
        </Stack.Navigator>
    )
}

export default HomeNavItems

const styles = StyleSheet.create({})
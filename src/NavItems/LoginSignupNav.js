import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const LoginSignupNav = () => {
    const Stack = createNativeStackNavigator()
    return (

        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarColor: "#1c1c27", tabBarStyle: { display: 'none' } }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false,
                statusBarColor: "#1d1e32"
            }} />
        </Stack.Navigator>

    )
}

export default LoginSignupNav

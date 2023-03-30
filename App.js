import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';

import MoviePage from './src/components/MoviePage';

import MoviesList from './src/lists/MoviesList';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarColor: "#1d1e32" }} />
        <Stack.Screen name="MoviePage" component={MoviePage} options={{ headerShown: false, statusBarColor: "#1d1e32" }} />

        <Stack.Screen name="MoviesList" component={MoviesList} />

        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, statusBarColor: "#1d1e32" }} />
        <Stack.Screen name="Home" options={{ headerShown: false, statusBarColor: "#1c1c27" }}>
          {(props) => <Home {...props} name="indranil" />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",

  }
})

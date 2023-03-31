import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';

import MoviePage from './src/components/MoviePage';
import MovieCard from './src/cards/MovieCard';
import MoviesList from './src/lists/MoviesList';

import Favorities from './src/components/Favorities';
import Settings from './src/components/Settings';
import Tv from './src/components/Tv';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, statusBarColor: "#1c1c27" }} />
        <Stack.Screen name="MoviePage" component={MoviePage} options={{ headerShown: false, statusBarColor: "#1c1c27" }} />

        <Stack.Screen name="MoviesList" component={MoviesList} options={{
          statusBarColor: "#1c1c27",
          headerStyle: {
            backgroundColor: "#1c1c27",

          },
          headerTintColor: 'white'
        }} />

        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
          statusBarColor: "#1d1e32"
        }} />
        <Stack.Screen name="Home" options={{ headerShown: false, statusBarColor: "#1c1c27" }}>
          {(props) => <Home {...props} name="indranil" />}
        </Stack.Screen>

        <Stack.Screen name="Favorities" component={Favorities} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Tv" component={Tv} />
        {/* <Stack.Screen name="MovieCard" component={MovieCard} /> */}
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

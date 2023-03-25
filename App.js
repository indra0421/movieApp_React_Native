import Login from './src/components/Login';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={[styles.mainContainer,{backgroundColor:"#1d1e32"}]}>
      <Login/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    height:"100%",
   
  }
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ route }) => {
    const { username } = route.params;
    return (
        <View>
            <Text>welcome , {username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
export default Home


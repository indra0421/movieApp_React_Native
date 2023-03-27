import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Api = () => {

    const apiKey = "34098ceb";
    const searchTerm = "money hei"

    const submitHandle = () => {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <View>
            <TouchableOpacity
                onPress={submitHandle}
            >
                <Text> Click me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Api

const styles = StyleSheet.create({})
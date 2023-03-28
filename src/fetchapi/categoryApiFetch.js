import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'



const categoryApiFetch = () => {
    const categoryApi = "https://api.themoviedb.org/3/genre/movie/list?api_key=30f76e3ddb7adb8e8c0dfc85fb5578e9&language=en-US"
    const [category, setCategory] = useState()

    useEffect(() => {
        fetch(categoryApi)
            .then(res => res.json())
            .then(res => setCategory(res.genres))
            .catch(err => console.error(err));
    }, [])

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

export default categoryApiFetch

const styles = StyleSheet.create({})
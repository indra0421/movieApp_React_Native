import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';

const MoviesList = ({ route }) => {
    const [lists, setLists] = useState()
    const { movieID, name } = route.params;
    const id = movieID;
    const apiKey = "30f76e3ddb7adb8e8c0dfc85fb5578e9"

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => setLists(response.results))
            .catch(err => console.error(err));

    }, [])

    const allMovies = ({ item }) => {
        return (
            <View>
                <Text>{item.original_title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {/* <Text>{name}</Text> */}
            <FlatList
                data={lists}
                renderItem={allMovies}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default MoviesList

const styles = StyleSheet.create({})
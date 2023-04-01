import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import MovieCard from '../cards/MovieCard'
import { API_KEY2 } from '@env'


const TopRated = () => {
    const [lists, setLists] = useState();
    const apiUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY2}`

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                setLists(response.results)

            })
            .catch(err => console.error(err));
    })

    return (
        <View style={styles.LatestMovieContainer}>
            <View>
                <Text style={styles.latestMovie}>Trending</Text>
            </View>
            <FlatList
                horizontal
                data={lists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={MovieCard}
                style={{ marginLeft: 15 }}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    LatestMovieContainer: {
        width: "100%",
        marginTop: 20
    },
    latestMovie: {
        color: "#dddee2",
        fontSize: 18,
        marginLeft: 16
    },

})

export default TopRated
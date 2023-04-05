import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { LatestMovieApi } from '../Apis/LatestMovieApi'
import MovieCard from '../cards/MovieCard'
// import { SeriesApi } from '../Apis/SeriesApi'
// import { TvshowsApi } from '../Apis/TvshowsApi'
// import { API_KEY2 } from '@env'

const LatestMovies = () => {
    const API_KEY2 = "30f76e3ddb7adb8e8c0dfc85fb5578e9"

    const [lists, setLists] = useState();
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY2}`

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                setLists(response.results)

            })
            .catch(err => console.error(err));
    }, [])

    return (
        <View style={styles.LatestMovieContainer}>
            <View>
                <Text style={styles.latestMovie}>Latest Movies</Text>
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
export default LatestMovies
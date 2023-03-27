import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { LatestMovieApi } from '../Apis/LatestMovieApi'
import MovieCard from '../cards/MovieCard'
import { SeriesApi } from '../Apis/SeriesApi'
import { TvshowsApi } from '../Apis/TvshowsApi'

const LatestMovies = () => {

    return (
        <View style={styles.LatestMovieContainer}>
            <View>
                <Text style={styles.latestMovie}>Latest Movies</Text>
            </View>
            <FlatList
                horizontal
                data={LatestMovieApi}
                keyExtractor={(item) => item.id.toString()}
                renderItem={MovieCard}
                style={{ marginLeft: 7 }}

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
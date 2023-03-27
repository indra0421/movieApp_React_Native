import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MovieCard from '../cards/MovieCard'
import { TrendingApi } from '../Apis/TrendingApi'

const TrendingMovies = () => {
    return (
        <View style={styles.LatestMovieContainer}>
            <View>
                <Text style={styles.latestMovie}>Trending</Text>
            </View>
            <FlatList
                horizontal
                data={TrendingApi}
                keyExtractor={(item) => item.id.toString()}
                renderItem={MovieCard}
                style={{ marginLeft: 7 }}

            />
        </View>
    )
}

export default TrendingMovies

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
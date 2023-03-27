import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MovieCard from '../cards/MovieCard'
import { SeriesApi } from '../Apis/SeriesApi'

const Series = () => {

    return (
        <View style={styles.LatestMovieContainer}>
            <View>
                <Text style={styles.latestMovie}>Popular Series</Text>
            </View>
            <FlatList
                horizontal
                data={SeriesApi}
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
export default Series
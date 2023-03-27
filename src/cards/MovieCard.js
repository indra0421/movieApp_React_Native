import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieCard = ({ item }) => {
    return (
        <View style={styles.movieCard}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: item.imgsrc }}
                />

            </View>
            <View style={styles.movieDetails}>
                <Text style={[styles.movieTitle, { color: "#fbfbfb", fontSize: 16 }]}>{item.title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        position: "relative"
    },
    cardImage: {
        width: "100%",
        height: 210,

        aspectRatio: 3 / 4,
        margin: 5,
        marginBottom: 0,
        borderRadius: 10,
    },
    movieDetails: {
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5

    },

})

export default MovieCard


import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MovieCard = ({ item }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    var url = `${baseUrl}/${item.poster_path}`;
    var movieTitle = item.original_title;
    return (

        <TouchableOpacity>
            <View style={styles.movieCard}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity
                    >
                        <Image
                            style={styles.cardImage}
                            source={{ uri: url }}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.movieDetails}>
                    <Text style={[styles.movieTitle, { color: "#fbfbfb", fontSize: 16 }]}>{item.original_title}</Text>
                </View>

            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        position: "relative",

    },
    cardImage: {
        width: 170,
        height: 220,

        // aspectRatio: 3 / 4,
        margin: 5,
        marginBottom: 0,
        borderRadius: 10,
    },
    movieDetails: {
        marginTop: 5,
        marginBottom: 5,
        height: "auto",
        // borderWidth: 1,
        // borderColor: "#fff",
        width: 170,
        marginLeft: 7,
        textAlign: "center"

    },
    movieCard: {
        marginRight: 2,
        width: 180,
        // height: 150
        // borderWidth: 1,
        // borderColor: "yellow"

    },
    movieTitle: {
        // borderWidth: 1,
        // borderColor: "#fff",
        height: "auto",
        textAlign: "center"
    }

})

export default MovieCard


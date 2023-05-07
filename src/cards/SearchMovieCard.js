import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const SearchMovieCard = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://images.hindustantimes.com/img/2022/08/12/550x309/Viruman_movie_review_1660291389031_1660291405526_1660291405526.jpg" }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.detailsContainer}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 3,
        height: 120,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        borderRadius: 10
    }, imageContainer: {
        borderWidth: 1,
        height: "100%",
        borderColor: "green",
        width: "40%"

    },
    detailsContainer: {
        width: "60%"
    }
})

export default SearchMovieCard

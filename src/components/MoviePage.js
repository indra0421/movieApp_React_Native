import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MoviePage = ({ route }) => {
    const { title, image } = route.params;
    return (
        <View>
            <Image
                style={styles.img}
                source={{ uri: image }}

            />
            <Text>{title}</Text>
        </View>
    )
}

export default MoviePage

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: undefined,
        aspectRatio: 3 / 2
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MList = ({ routes }) => {

    const API_KEY1 = "34098ceb"
    const baseUrl = 'https://image.tmdb.org/t/p/original';

    var url = `${baseUrl}/${item.poster_path}`;
    var movieTitle = item.original_title;

    

    return (
        <TouchableOpacity
            onPress={imgClick}
        >
            <View style={styles.movieCard}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: url }}
                />
            </View>
        </TouchableOpacity>
    )


}

export default MList

const styles = StyleSheet.create({})
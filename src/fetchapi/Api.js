import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Api = () => {


    const trendingList = "https://api.themoviedb.org/3/trending/all/week?api_key=30f76e3ddb7adb8e8c0dfc85fb5578e9"
    const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=30f76e3ddb7adb8e8c0dfc85fb5578e9&language=en-US&page=1"
    const tvEpisodes = "https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=30f76e3ddb7adb8e8c0dfc85fb5578e9&language=en-US"
    const categoryApi = "https://api.themoviedb.org/3/genre/movie/list?api_key=30f76e3ddb7adb8e8c0dfc85fb5578e9&language=en-US"



    const submitHandle = () => {

        fetch(trendingList)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <View>
            <TouchableOpacity
                onPress={submitHandle}
            >
                <Text> Click me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Api

const styles = StyleSheet.create({})
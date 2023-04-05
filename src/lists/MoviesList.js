import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// import { API_KEY2, API_KEY1 } from '@env'

const MoviesList = ({ route }) => {
    const [lists, setLists] = useState()
    const { movieID, name } = route.params;
    const navigation = useNavigation();
    const id = movieID;
    const API_KEY1 = "34098ceb"
    const API_KEY2 = "30f76e3ddb7adb8e8c0dfc85fb5578e9"
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY2}&with_genres=${id}`


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setLists(response.results)

            })
            .catch(err => console.error(err));

    }, [])

    const allMovies = ({ item }) => {

        var url = `${baseUrl}/${item.poster_path}`;
        var movieTitle = item.original_title;

        const imgClick = () => {
            const Imageurl = `http://www.omdbapi.com/?apikey=${API_KEY1}&t=${movieTitle}`;

            try {
                fetch(Imageurl)
                    .then(response => response.json())
                    .then((data) => {
                        if (data.Response === 'False') {
                            alert('movie not found')
                        } else {
                            const title = data.Title;
                            const image = data.Poster;
                            const year = data.Year;
                            const duration = data.Runtime;
                            const genre = data.Genre;
                            const plot = data.Plot;
                            const rating = data.imdbRating;
                            const writer = data.Writer;
                            const actors = data.Actors;
                            const directcor = data.Director;
                            navigation.navigate("MoviePage", { title, year, duration, genre, plot, rating, writer, actors, directcor });
                        }

                    })
                    .catch(error => console.error(error));
            } catch (e) {

            }
        }

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

    return (
        <View style={styles.mainContainer}>

            <FlatList
                data={lists}
                renderItem={allMovies}
                keyExtractor={(item, index) => index.toString()}
                style={styles.movies}
                numColumns={3}

            />
        </View>

    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: 113,
        height: 200,
        // borderWidth: 2,
        // borderColor: "black",

        // aspectRatio: 3 / 4,
        marginBottom: 10,
        borderRadius: 5,
        margin: 5

    },
    movieDetails: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5

    },
    mainContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#1c1c27",




    }, movieCard: {
        width: 118,
        height: "auto",
        backgroundColor: "#1c1c27",
        borderRadius: 10,

    },
    movies: {
        // marginLeft: 9
    }
})
export default MoviesList


import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'


const MoviePage = ({ route }) => {
    const apiKey = "30f76e3ddb7adb8e8c0dfc85fb5578e9"
    const [imagePath, setImagePath] = useState()

    const navigation = useNavigation();
    const { title, year, duration, genre, plot, rating, writer, actors, directcor } = route.params;
    const str = genre.toString();
    console.log(str)
    var arr = str.split(',');
    console.log(title)
    const posterGetUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`

    fetch(posterGetUrl)
        .then(response => response.json())
        .then(response => {
            setImagePath(response.results[0].poster_path)

        })
        .catch(err => console.error(err));



    const baseUrl = 'https://image.tmdb.org/t/p/original';
    var url = `${baseUrl}/${imagePath}`;

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: url }} style={styles.image} />

                <LinearGradient
                    colors={['rgba(0,0,0,0)', '#1c1c27']}
                    style={styles.imageShadow}
                    locations={[0.2, 0.6]}
                />

                <View style={styles.movieTitleContainer}>
                    <Text style={styles.movieTitle}>{title}</Text>
                </View>
                <View style={styles.imageTopIcons}>
                    <TouchableOpacity style={styles.backButton} onPress={() => {
                        navigation.goBack();
                    }}>
                        <Icon name="back" size={28} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton}>
                        <Icon name="hearto" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <View><Text style={styles.rateContainerText}>{rating}/10 ⭐  -</Text></View>
                <View style={styles.rateCont}><Text style={styles.rateContainerText}>{duration}  -</Text></View>
                <View><Text style={styles.rateContainerText}>{year}</Text></View>
            </View>

            <View style={styles.genreContainer}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#17cbd8', '#107e85']}
                        style={styles.genres}>
                        <Text style={{ color: "#fff", fontSize: 16, marginRight: 19 }}>{arr[0]}</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#17cbd8', '#107e85']}
                        style={styles.genres}>
                        <Text style={{ color: "#fff", fontSize: 16, marginRight: 19 }}>{arr[1]}</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#17cbd8', '#107e85']}
                        style={styles.genres}>
                        <Text style={{ color: "#fff", fontSize: 16, marginRight: 19 }}>{arr[1]}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>

            <View style={styles.downloadContainer}>
                <TouchableOpacity>
                    <LinearGradient colors={['#17cbd8', '#107e85']}
                        style={styles.playButton}>
                        <Icon name="play" size={32} color="#fff" />
                        <Text style={{ fontSize: 20, marginLeft: 8, color: "#fff" }}>Watch Now</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dwnShareBtn}>
                    <Icon name="download" size={31} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dwnShareBtn}>
                    <Icon2 name="share" size={31} color="#fff" />
                </TouchableOpacity>

            </View>

            <View style={styles.plotStyle}>
                <View><Text style={{ color: "#fff", fontSize: 23 }}>Directed by</Text></View>
                <Text style={{ color: "#949598", fontSize: 15, lineHeight: 28 }}>{directcor}</Text>
            </View>
            <View style={styles.plotStyle}>
                <View><Text style={{ color: "#fff", fontSize: 23 }}>Actors</Text></View>
                <Text style={{ color: "#949598", fontSize: 15, lineHeight: 28 }}>{actors}</Text>
            </View>
            <View style={styles.plotStyle}>
                <View><Text style={{ color: "#fff", fontSize: 23 }}>Writer</Text></View>
                <Text style={{ color: "#949598", fontSize: 15, lineHeight: 28 }}>{writer}</Text>
            </View>
            <View style={styles.plotStyle}>
                <View><Text style={{ color: "#fff", fontSize: 23 }}>Story Line</Text></View>
                <Text style={{ color: "#949598", fontSize: 15, lineHeight: 28 }}>{plot}</Text>
            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        position: "relative",
        backgroundColor: "#1c1c27"
    },
    image: {
        width: "100%",
        height: 430,
    },
    imageTopIcons: {
        // borderWidth: 1,
        // borderColor: "#fff",
        position: "absolute",
        top: 20,
        width: "100%",
        height: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    backButton: {
        borderWidth: 1,
        borderColor: "#fff",
        padding: 14,
        borderRadius: 20,
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "rgba(28, 28, 39, 0.7)"
    },
    movieTitleContainer: {
        position: "absolute",
        bottom: 10,
        left: 16,
    },
    movieTitle: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    imageContainer: {
        width: "100%",
        position: "relative"
    },
    imageShadow: {
        // borderWidth: 2,
        width: "100%",
        height: 200,
        position: "absolute",
        borderColor: "#fff",
        bottom: 0,

    },
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,
        marginTop: 7,
        marginLeft: 15
    },
    genreContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 15,
        marginBottom: 10
    },
    rateCont: {
        marginLeft: 10,
        marginRight: 10
    },
    rateContainerText: {
        fontSize: 17,
        color: "#51565b",
        fontWeight: "bold"
    },
    genres: {
        borderColor: "#1f5158",
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 12,
        borderRadius: 20,
        paddingBottom: 2

    },
    genres: {
        borderColor: "#1f5158",
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 12,
        borderRadius: 20,
        paddingBottom: 2

    },
    downloadContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 15

    },
    playButton: {
        height: 60,
        width: 210,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 15,
        padding: 15

    },
    dwnShareBtn: {
        borderWidth: 1,
        borderColor: "#fff",
        marginLeft: 5,
        padding: 12,
        borderRadius: 15

    },
    plotStyle: {
        marginLeft: 16,
        marginTop: 20,
        marginRight: 10,
        display: "flex",
        flexDirection: "column"
    }

});

export default MoviePage;

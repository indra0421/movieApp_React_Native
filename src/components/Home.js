import { Image, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import Menu from './Menu';
import LatestMovies from '../movies/LatestMovies';
import TrendingMovies from '../movies/TrendingMovies';
import Tvshows from '../movies/Tvshows';
import Series from '../movies/Series';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Home = ({ route }) => {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    const { username } = route.params;
    const img = {
        uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    }

    const apiKey = "34098ceb";
    const searchEvent = () => {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchQuery}`;

        try {
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    if (data.Response === 'False') {
                        alert('please enter correct movie name')
                    } else {
                        const title = data.Title;
                        const image = data.Poster;
                        navigation.navigate("MoviePage", { title, image });
                    }

                })
                .catch(error => console.error(error));
        } catch (e) {

        }
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.topContainerLeft}>
                    <Text style={styles.welcomeUser}>Welcome {username} 👏</Text>
                    <Text style={styles.userText}>Lets relax and Watch a movie !</Text>
                </View>
                <View style={styles.topContainerRight}>
                    <Image source={img} style={styles.userImage} />
                </View>
            </View>

            {/* search bar */}
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={searchEvent}>
                    <Feather name="search" size={24} color="#92a6b8" style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Search movies..."
                    placeholderTextColor="#92a6b8"
                    onChangeText={(text) => setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>

            {/* category container  */}
            <View style={styles.categoryContainer}>
                <Text style={styles.title}>Categories</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryItems}>
                    <View style={styles.categoryItem}>
                        <Text style={[styles.categoryTitle, { color: "#f27706" }]}>Action</Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Text style={styles.categoryTitle}>Comedy</Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Text style={styles.categoryTitle}>Drama</Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Text style={styles.categoryTitle}>Horror</Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Text style={styles.categoryTitle}>Romance</Text>
                    </View>
                    <View style={styles.categoryItem}>
                        <Text style={styles.categoryTitle}>Sci-Fi</Text>
                    </View>
                </ScrollView>
            </View>

            {/* latest movie list  */}
            <ScrollView style={styles.scrollMovies}>
                <LatestMovies />
                <TrendingMovies />
                <Series />
                <Tvshows />


            </ScrollView>

            {/* bottom menu  */}
            {/* <Menu /> */}


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#1c1c27",
        height: "100%"
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    topContainerLeft: {
        marginLeft: 20
    },
    topContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 2,
        backgroundColor: "#1c1c27",
        marginTop: 10
    },
    welcomeUser: {
        color: "#fff",
        fontSize: 15,
    },
    userText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 4
    },
    topContainerRight: {
        marginRight: 17
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#34353e',
        borderRadius: 40,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 30,
        height: 45,

    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        // fontWeight: 'bold',
        color: "#fff"
    },
    categoryContainer: {
        marginTop: 13,
        marginBottom: 10,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20,
        color: "#e2e1e7"
    },
    categoryItems: {
        marginLeft: 15
    },
    categoryItem: {
        backgroundColor: '#34353e',
        borderRadius: 20,
        // padding: 10,
        marginRight: 8,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
    },
    categoryTitle: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: "#c1c0c7",

    },


    imageContainer: {
        position: "relative"
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',

    },
    movieDate: {
        marginTop: 3,
        marginBottom: 3
    },





})
export default Home


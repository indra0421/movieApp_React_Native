import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
    const navigation = useNavigation();
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryItems}>
            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 28, name: "Action" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Action</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 12, name: "Adventure" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Adventure</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 878, name: "Science Fiction" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Sci-Fi</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 35, name: "Comedy" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Comedy</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 80, name: "Crime" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Crime</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 18, name: "Drama" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Drama</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 10751, name: "Family" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Family</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 14, name: "Fantacy" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Fantacy</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 9648, name: "Mystery" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Mystery</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 27, name: "Horror" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Horror</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 10749, name: "Romance" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Romance</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 10752, name: "War" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>War</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 16, name: "Animation" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Animation</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
})
export default Category


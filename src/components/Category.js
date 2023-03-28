import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
    const navigation = useNavigation();
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryItems}>
            <View style={styles.categoryItem}>
                <Text style={[styles.categoryTitle, { color: "#f27706" }]}>Action</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("MoviesList", { movieID: 27, name: "Adventure" })}
            >
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}>Adventure</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Animation</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Comedy</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Crime</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Drama</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Family</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Fantasy</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Mystery</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Romance</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>Sci-Fi</Text>
            </View>
            <View style={styles.categoryItem}>
                <Text style={styles.categoryTitle}>War</Text>
            </View>
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


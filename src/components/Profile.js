import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';


function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.profileInfoContainer}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileDetail}>Date of Birth: 01/01/1990</Text>
                <Text style={styles.profileDetail}>Email: johndoe@gmail.com</Text>
                <Text style={styles.profileDetail}>Address: 123 Main St, Anytown, USA</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity><AntDesign name="instagram" size={50} color="#fff" /></TouchableOpacity>
                <TouchableOpacity><Entypo name="google-" size={50} color="#fff" ></Entypo></TouchableOpacity>
                <TouchableOpacity><FontAwesome name="facebook-square" size={50} color="#fff" /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c27',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfoContainer: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 20,
    },
    profileName: {
        color: '#1c1c27',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileDetail: {
        color: '#1c1c27',
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#16afb7',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    },
});


export default Profile;

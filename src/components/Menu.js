import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation();
    const [clicked, setClicked] = useState(true)

    return (
        <View style={[{ bottom: 0, left: 0, right: 0, backgroundColor: '#1c1c27' }, styles.navContainer]}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Icon name="home" size={31} color='#17bac4' />
                <Text style={{ color: "#17bac4" }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.navigate("Tv")}>
                <Icon2 name="live-tv" size={31} color="#fff" />
                <Text style={{ color: "#fff" }}>Watch TV</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.navigate("Favorities")}>
                <Icon2 name="favorite-border" size={31} color="#fff" />
                <Text style={{ color: "#fff" }}>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                    navigation.navigate("Settings");
                }}>
                <Icon3 name="settings" size={31} color="#fff" />
                <Text style={{ color: "#fff" }}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        display: "flex",
        flexDirection: "row",
        // margin: 7,
        height: 70

    },
    navItems: {
        color: "#fff",
        fontSize: 17
    }
})

export default Menu


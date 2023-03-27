import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Menu = () => {
    return (
        <View style={[{ bottom: 0, left: 0, right: 0, backgroundColor: '#2a2429' }, styles.navContainer]}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('Home pressed')}>
                <Text style={styles.navItems}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('Profile pressed')}>
                <Text style={styles.navItems}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('Settings pressed')}>
                <Text style={styles.navItems}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('Settings pressed')}>
                <Text style={styles.navItems}>about</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        display: "flex",
        flexDirection: "row",
        margin: 7

    },
    navItems: {
        color: "#fff",
        fontSize: 17
    }
})

export default Menu


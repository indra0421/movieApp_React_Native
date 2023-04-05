import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Notifications</Text>
                <TouchableOpacity style={styles.settingButton}>
                    <Text style={styles.settingButtonText}>On</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Theme</Text>
                <TouchableOpacity style={styles.settingButton}>
                    <Text style={styles.settingButtonText}>Light</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Language</Text>
                <TouchableOpacity style={styles.settingButton}>
                    <Text style={styles.settingButtonText}>English</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Logout</Text>
                <TouchableOpacity style={styles.settingButton}>
                    <Text style={styles.settingButtonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c27',
        padding: 16
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingVertical: 16
    },
    settingLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    settingButton: {
        backgroundColor: '#16afb7',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#16afb7'
    },
    settingButtonText: {
        fontSize: 16,
        color: '#fff'
    }
});

export default Settings;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = () => {
        if (username != '' && password != '') {
            navigation.navigate("Home", { username })
        } else alert('please enter correct details')


    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
                    <FontAwesome
                        name={isPasswordVisible ? 'eye-slash' : 'eye'}
                        size={24}
                        color="#ccc"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.separator}>
                <View style={styles.line} />
                <Text style={styles.separatorText}>or login with</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="facebook" size={24} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="google" size={24} color="#db4437" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="twitter" size={24} color="#1da1f2" />
                </TouchableOpacity>
            </View>
            <View style={styles.regreq}>
                <Text style={{ color: "#fff" }}>Don't have account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.reg}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#1d1e32',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: "#fff"
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 18,
        backgroundColor: "#fff"
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: "#fff"
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingLeft: 20,
        fontSize: 18,
    },
    toggleButton: {
        paddingRight: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#e72626',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    separatorText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: "#fff"
    },
    socialContainer: {
        flexDirection: 'row',
    },
    socialButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    regreq: {
        display: "flex",
        marginTop: 20,
        flexDirection: "row",

    },
    reg: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#fff",
        textDecorationLine: 'underline',
        marginLeft: 5
    }
});

export default Login;

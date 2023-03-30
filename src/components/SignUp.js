import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUp = () => {

    const navigation = useNavigation();


    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        if (password === confirmPassword) {

            console.log(name, mobile, dob, email, agree);

        } else {
            alert('passwords are not matching');
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailPattern.test(email);
    }

    const validatePhone = (phone) => {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    }
    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Text style={styles.title}>Sign up</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mobile"
                value={mobile}
                onChangeText={(text) => setMobile(text)}
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => {
                    if (!validatePhone(mobile)) {
                        alert('Please enter a valid 10-digit phone number');
                    }
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={userName}
                onChangeText={(text) => setUserName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                keyboardType='email-address'
                onBlur={() => {
                    if (!validateEmail(email)) {
                        alert('Please enter a valid email address');
                    }
                }}

            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setAgree(!agree)}
            >
                <View style={agree ? styles.checkedBox : styles.box}>
                    {agree && <AntDesign name="check" size={16} color="#fff" />}
                </View>
                <Text style={styles.label}>I agree to the Terms and Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                disabled={!name || !mobile || !dob || !email || !agree}
            >
                <LinearGradient colors={['#17cbd8', '#107e85']}
                    style={styles.playButton}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </LinearGradient>

            </TouchableOpacity>
            <View style={styles.socialMedia}>
                <Text style={styles.socialMediaText}>or Sign up with</Text>
                <View style={styles.socialMediaIcons}>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome name="facebook" size={24} color="#3b5998" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name="logo-google" size={24} color="#db4437" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome name="twitter" size={24} color="#1da1f2" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomText}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.bottomLink}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

        backgroundColor: '#1d1e32',


    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
        color: "#fff"
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 16,

        backgroundColor: "#fff"
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    box: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        marginRight: 10,
    },
    checkedBox: {
        width: 20,
        height: 20,
        backgroundColor: '#5fcf80',
        borderWidth: 1,
        borderColor: '#5fcf80',
        borderRadius: 3,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        color: "#fff"
    },
    playButton: {
        width: 310,
        height: 50,
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
    socialMedia: {
        marginTop: 32,
        alignItems: 'center',
    },
    socialMediaText: {
        fontSize: 16,
        marginBottom: 16,
        color: "#fff"

    },
    socialMediaIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
    },
    icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        marginHorizontal: 10,
    },
    bottom: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20
    },
    bottomText: {
        fontSize: 16,
        marginRight: 8,
        color: "#fff"
    },
    bottomLink: {
        fontSize: 16,
        color: '#2196f3',
        fontWeight: 'bold', color: "#fff",
        textDecorationLine: "underline"
    },
});


export default SignUp;

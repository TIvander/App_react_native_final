import React,{useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import Fonts from '../styles/Fonts';
import Separar from '../components/separar';

import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const About =( { navigation } ) => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])
    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.inputContainer} >
       <Text style={Fonts.FontType}> Forneça seus dados abaixo</Text>
       
    <SafeAreaView style={styles.inputContainer}>
    <TextInput
                    placeholder="Email"
                    value={ email }
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={ password }
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
    </SafeAreaView>
    <TouchableOpacity
                    onPress={handleSignup}
                    style={[styles.button, styles.buttonOutLine]}
                >
                    <Text >Registre-se</Text>
                </TouchableOpacity>
      <Separar/>
    </View>
  )
}
export default About

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width:'70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#00cc00',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutLine: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#00cc00',
        borderWidth:2,
    },
    buttonText: {
        color:'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutLineText: {
        color:'#00cc00',
        fontWeight: '700',
        fontSize: 16
    }
})
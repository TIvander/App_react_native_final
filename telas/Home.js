import React, { useRef, useEffect } from 'react';
import { Animated, Button, Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Collors from '../styles/Collors';
import AssetExample from '../components/LogoHome';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
import { Card } from 'react-native-paper';
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
const FadeInView = (props) => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function App({ navigation }) {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const handleSignOut = () =>{
    auth.signOut()
    .then(() =>{
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  const acessar = () => {
      if(text!= '' && number != '' ){
          alert('seja bem-vindo')
      }else{
        alert('Preencha os campos ou faça um cadastro')
      }
  }
  
  return (
    <View style={[Collors.bodyColorHome, styles.container]}>
      <FadeInView>
        <AssetExample />
      </FadeInView>

      <FadeInView>
       
        <Separar />
      </FadeInView>
      <Separar />
      <Separar />
      <MyButton
        title="Fotografia do Aluno"
        color="orange"
        navigation={navigation}
        destino="Cam"
      />
      <Separar />
      
      <MyButton
        title="Cadastrar aluno"
        color="red"
        navigation={navigation}
        destino="CreateAlunos"
      />


      <Separar />
     <TouchableOpacity
     onPress={handleSignOut}
     style={styles.button}
    
     >
      <Text style={styles.buttonText}>Sair</Text>
     
     </TouchableOpacity>
        
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: '#00cc00',
    width: '25%',
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
  container: {
      justifyContent:'center',
      alignItems:'center',
      
  }
});
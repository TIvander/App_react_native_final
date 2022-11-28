import react, { useState } from "react";
import { View, TextInput, Button, ScrollView, StyleSheet } from "react-native-web";

import { db,collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";


const CreateAlunos = ()  => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})}
    const saveNewAluno = async () => {
        if (state.name ==='') {
            alert('O campo NOME é obrigatório')
        } else {
           await addDoc(collection(db,"alunos"),{
                name: state.name,
                email: state.email,
                phone: state.phone,
            })
            alert('Salvo com sucesso!')
        }
        console.log(state)
    }
    return (
    <View style={Styles.container}>
        <View style={Styles.inputGroup}>
            <TextInput placeholder="Nome"
             onChangeText={(value) => handleChangeText('name', value)}
             />
            <TextInput placeholder="Email"
            onChangeText={(value) => handleChangeText('email', value)}
            />
            <TextInput placeholder="Telefone" 
            onChangeText={(value) => handleChangeText('phone', value)}
            />
                <View>
                    <Button title="Salvar"
                        onPress={() => saveNewAluno()}
                    />    
                </View> 
        </View>  
    </View> 
  )
    }
    
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    }
})
export default CreateAlunos
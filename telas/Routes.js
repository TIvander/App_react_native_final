
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home  from './Home';
import Sobre from './Sobre';
import AbrirConta from './AbrirConta';
import AbreConta from './AbreConta';
import Tabs from './Tabs';
import Login from './Login'
import CreateAlunos from './CreateAlunos';
import AlunoDetails from './AlunoDetails';
import Cam from '../components/camera';
import ListAlunos from './ListAlunos';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
const Stack = createNativeStackNavigator();


export default function Route() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouterName="Login">
        <Stack.Screen name="Login" component={ Login }/>
          <Stack.Screen name="Home" component={ Home }/>  
          <Stack.Screen name="Sobre" component={ Sobre }/> 
          <Stack.Screen name="AbrirConta" component= { AbrirConta }/>  
          <Stack.Screen name="AbreConta" component= { AbreConta }/>
          <Stack.Screen name="Tabs" component= { Tabs }/>
          <Stack.Screen name="ListAlunos" component= { ListAlunos }/>
          <Stack.Screen name="CreateAlunos" component= { CreateAlunos }/>
          <Stack.Screen name="AlunoDetails" component= { AlunoDetails }/>
          <Stack.Screen name="Cam" component= { Cam }/>
        </Stack.Navigator>
        
      </NavigationContainer>
      
    </View>
  );
}



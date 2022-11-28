import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Fonts from '../styles/Fonts';
import { auth } from '../telas/firebase';
export default function AssetExample() {
  return (
    <View style={styles.container}>
    
      <Image style={styles.logo} source={require('../assets/GranbIcon.png')} />
      <Text style={Fonts.FontType}>   Olá {auth.currentUser?.email}</Text>
      <Text style={Fonts.FontType}>   Selecione o App Desejado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  logo: {
    height: 78,
    width: 57,
  }
});

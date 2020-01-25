import React from 'react';
import { Image, StyleSheet, Text, View, Button, Alert,Header } from 'react-native';
import hermione from './assets/hermione.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={{color: '#888', fontSize: 18, paddingBottom: 10}}>Hermione Granger</Text>
      <Image source={hermione} style={{ width : 200 , height: 159}}
      />
      <Text style={{paddingBottom: 10,paddingTop:10}}>
      Hermione Jean Granger is a Muggle-born Gryffindor, who becomes best friends with Harry Potter and Ron Weasley.</Text>
      <Button
      title = "Press Me"
      onPress = {() => Alert.alert('Hermone Granger')} style={{paddingBottom:10}}
      />
      <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png"}}
      style={{ width : 150 , height: 150, paddingTop:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

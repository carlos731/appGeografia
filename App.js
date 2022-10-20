import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import image from './image.js';

function App() {

  const [pais, setPais] = useState('');
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Geografia Brasileira</Text>
      <Image
        style={styles.tinyLogo}
        //source={require('./assets/as.jpg')}
        source={require('./assets/icon.png')}
      />
      <Picker
        selectedValue={pais}
        onValueChange={(value, index) => setPais(value)}
        mode="dropdown"
        style={styles.picker}
      >

        
        <Picker.Item label="Quem faz fronteira?" value="" />
        <Picker.Item label="Argentina" value="1"/>
        <Picker.Item label="Brasil" value="2" />
        <Picker.Item label="Bolívia" value="3" />
        <Picker.Item label="Chile" value="4" />
        <Picker.Item label="Colômbia" value="5" />
        <Picker.Item label="Equador" value="6" />
        <Picker.Item label="Guiana" value="7" />
        <Picker.Item label="Guiana Francesa" value="8" />
        <Picker.Item label="Paraguai" value="9" />
        <Picker.Item label="Peru" value="10" />
        <Picker.Item label="Suriname" value="11" />
        <Picker.Item label="Uruguai" value="12" />
        <Picker.Item label="Venezuela" value="13" />
      </Picker>

      <Text style={styles.text}>Quem faz fronteira: {pais}</Text>
      <View>
        <Image style={styles.tinyLogo} source={image[pais]}/>
      </View>

    </View>
  );
}
//<Picker.Item label="Argentina" value="Bolívia, Brasil, Chile, Paraguai e Uruguai"/>
export default App;

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    width: 300,
  },
  tinyLogo: {
    height: 200,
    width: 150,
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: 'center',
    paddingBottom: 20,
  },
  picker: {
    fontSize: 30,
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});

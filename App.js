import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Usuário'/>
        <TextInput placeholder='Senha' secureTextEntry={true}/>
      </View>
      
      <View>
        <TouchableOpacity onPress= 'form();'>
          <Text>Entrar no Sistema</Text>
        </TouchableOpacity>
      </View>
 
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutasAutenticadas from './src/Navegacion/RutasAutenticadas';
import RutasnoAutenticadas   from './src/Navegacion/RutasnoAutenticadas';


export default function App() {
  return (
   <RutasnoAutenticadas/>
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

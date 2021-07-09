import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/Loading';
import RutasAutenticadas from './src/Navegacion/RutasAutenticadas';
import RutasnoAutenticadas   from './src/Navegacion/RutasnoAutenticadas';
import { validarsesion } from './src/utils/Acciones';
import SwitchNavigator from './src/Navegacion/SwitchNavigator';


export default function App() {

  const [user, setuser] = useState(false)
  const [loading, setloading] = useState(false)


  useEffect(() => {
    
    setloading(true)
    validarsesion(setuser);
    setloading(false);

  }, []);

  if(loading){
    return <Loading isVisible={loading} text={"Estamos cargando todo"}/>
  }else{
    //si esta autenticado el navigator y si no lo manda  al componente tienda, cuenta, etc. 
    return user ? <SwitchNavigator /> : <RutasnoAutenticadas/>;
  }


 


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

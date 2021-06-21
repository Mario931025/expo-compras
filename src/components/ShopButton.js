import React from 'react'
import {StyleSheet,TouchableHighlight, View, Text } from 'react-native'
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//nos va a permitir navegar a la pantalla de mi tienda


export default function ShopButton() {
   
    const navigation = useNavigation()
   
    return (
       <TouchableHighlight style={styles.container}
       onPress={()=> {
           navigation.navigate("mitienda")
       }}
       >
           <Icon name="store" color="#fff" size={30}/>
       </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
 container:{
     backgroundColor : "#25d366",
     alignItems: "center",
     justifyContent:"center",
     width:72,
     height:72,
     borderRadius:36,
     top: -20, //margen top para que suba 
     shadowRadius:5,
     shadowOffset:{height:10},
     shadowOpacity:0.3,
     borderWidth:3,
     borderColor: "#fff",
     padding:20
 }
})
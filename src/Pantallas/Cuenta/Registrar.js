import React,{useRef} from 'react'
//suseref para acceder a las refrerencias de los componentes mediante codigos
//asgigna una referencia a nuestro componente para cceder a los propiedades u objetos
 //de nuestros componentes mediante una variable
import { StyleSheet, Text, View,Image,StatusBar } from 'react-native'
import RegisterForm from '../../components/RegisterForm';
import Toast from 'react-native-easy-toast'

export default function Registrar() {
    // variable que se usa para usdar hook de useref
    const toastRef = useRef(); 

    return (
        
         <View style={styles.container}>
         <StatusBar backgroundColor ="#128C73"/>
          <Image source={require("../../../assets/logo.png")}
          style= {styles.imglogo}
          />
          <Text style={styles.textobanner} >Crear Cuenta</Text>
             <RegisterForm  toastRef={toastRef}/>
           <Toast ref={toastRef} position="center" opacity={0.9}/>
            </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1, //el componente cubra toda la pantalla
        backgroundColor: "#128C73",
    },
    imglogo:{
        width: 106,
        height:106,
        marginTop:40,
        alignSelf: "center" //se alinia la imagen asi misma al centro 
    },
    textobanner:{
        fontFamily:"Arial",
        fontWeight: "bold",
        fontSize : 30,
        color: "#fff",
        alignSelf: "center"
    }

})

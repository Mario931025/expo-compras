import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { InteractionManager, Input,Button,Icon } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import {validateEmail} from '../utils/Utils'
import { isEmpty,size } from 'lodash' //devuelve boolean si el valor esta vacio 
//size devuelve lo largo de una variable
import * as firebase from 'firebase';
import Loading from './Loading';





export default function RegisterForm(props) {

    
    const { toastRef } =props
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [repetirPassword, setrepetirPassword] = useState()
    ////navegacion
    const navigation = useNavigation();
    const [show, setshow] = useState(false)
    const [loading, setloading] = useState(false)


    ///FUNCION CREAR CUENTA FIREBASE
    //en firebase la contraseña mayor a 6 caracteres
    function crearcuenta (){

        if(isEmpty(email) || isEmpty(password) || isEmpty(repetirPassword)){

            toastRef.current.show("todos los campos son obligatorios")

        }else if(!validateEmail(email)){

            toastRef.current.show("el email no tiene el formato correcto")

        }
        else if(password !== repetirPassword){
            toastRef.current.show("las contraseñas no coinciden")
        }else if(size(password) <6 ){
            toastRef.current.show("las contraseña debe tener min 6 caracteres")
        }else{
            
            setloading(true);

            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((response)=> {
                toastRef.current.show("Se creo el usuario correctamente")
                setloading(false);
            })
            .catch((err)=>{
                setloading(false)
                toastRef.current.show("Ocurrio un error o este usuario ya esta registrado");
                console.log(err)
            })
        }


    }


    return (
        <View style={styles.container}>
        <View
        style={{
            borderBottomColor:"#25D366",
            borderBottomWidth:2,
            width:100
        }}
        />

        <Input placeholder="Correo"
        containerStyle={styles.input}
        rightIcon={{
            type:"material-community",
            name:"at",
            color:"#128c7e",
            onPress : () => alert("Hola")
        }}

        leftIcon={{
            type : "material-community",
            name : "account-circle-outline",
            color:"#128c7e",
        }}

        onChangeText={(text) => {
            setemail(text);
          }}
          value={email}

        />
        <Input placeholder="Contraseña"
        containerStyle={styles.input}
        rightIcon={{
            type:"material-community",
            name:show ? "eye-off-outline" : "eye-outline" ,
            color:"#128c7e",
            onPress : () => setshow(!show)
        }}

        leftIcon={{
           type:"material-community",
           name:"security",
           color:"#128c7e",
        }}

        onChangeText={(text) => {
            setpassword(text);
          }}
          secureTextEntry={!show}
          value={password}
        />

<Input placeholder="Repite contraseña"
        containerStyle={styles.input}
        rightIcon={{
            type:"material-community",
            name:show ? "eye-off-outline" : "eye-outline",
            color:"#128c7e",
            onPress : () =>  setshow(!show)
        }}

        leftIcon={{
           type:"material-community",
           name:"security",
           color:"#128c7e",
        }}

        onChangeText={(text) => {
            setrepetirPassword(text);
          }}
          secureTextEntry={!show}
          value={repetirPassword}
        />


        <Button title="Registrate"    
        containerStyle={styles.btnentrar} //estilo que se aplica  afuera
        buttonStyle={{backgroundColor:"#25d366"}} //estilo que se aplica adentro de
        onPress={()=> crearcuenta()}
        />

<Button title="Inisiar sesión"    
        containerStyle={styles.btnentrar} //estilo que se aplica  afuera
        buttonStyle={{backgroundColor:"#128C7E"}} //estilo que se aplica adentro de
        onPress={()=> navigation.goBack()}
        />


      <Loading isVisible={loading} text="cargando.."/>
    </View>

    
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#f5f6f8",
        flex: 1, //lo que hace es que subre toda la panatlla de todo el componente, en este caso la mitad
        marginTop:20, //da un espacio entre componentes
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:"center",// se alinenen los inputs al centro
        paddingTop:20, //par que tener un paddign de este conmponente
    },
    input:{
        width:"90%",
        marginTop:20,
        height:50
    },
    btnentrar:{
        width:"90%",
        marginTop:20,

    }

})

import React,{useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { InteractionManager, Input,Button,Divider,Icon } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import {validateEmail} from '../utils/Utils'
import { isEmpty } from 'lodash' //devuelve boolean si el valor esta vacio 
import { validarsesion } from '../utils/Acciones'



export default function LoginForm(props) {

    const { toastRef } =props
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    validarsesion();

    const iniciarsesion = ()=>{

        if( isEmpty(email) || isEmpty(password)){

            toastRef.current.show("Ingresa email y password")
        }else if(!validateEmail(email)){
            toastRef.current.show("ingrese un correo valido")
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
                name:"eye-outline",
                color:"#128c7e",
                onPress : () => alert("Hola")
            }}

            leftIcon={{
               type:"material-community",
               name:"security",
               color:"#128c7e",
            }}

            onChangeText={(text) => {
                setpassword(text);
              }}
              secureTextEntry={true}
              value={password}
            />


            <Button title="Entrar"
            containerStyle={styles.btnentrar} //estilo que se aplica  afuera
            buttonStyle={{backgroundColor:"#25d366"}} //estilo que se aplica adentro de
            onPress={()=> iniciarsesion()}
            />
            <Text style={styles.txtcrearcuenta}>
                ¿No tienes cuenta? 
                <Text style={styles.cuenta}>
                    Crear Cuenta
                </Text>
            </Text>

            <Divider
                style={{
                    backgroundColor: "#128C7E",
                    height:1,
                    width:"90%",
                    marginTop:20
                }}
            />
            <Text style={styles.txto}>O</Text>

            <View style={styles.btnlogin}>
                <TouchableOpacity style={styles.btnloginsocial}>
                    <Icon 
                    size={24}
                    type="material-community"
                    name="google"
                    color="#fff"
                    backgroundColor="transparent"
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnloginsocial}>
                    <Icon 
                    size={24}
                    type="material-community"
                    name="facebook"
                    color="#fff"
                    backgroundColor="transparent"
                    />
                </TouchableOpacity>
            </View>

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

    },
    txtcrearcuenta: {
        marginTop: 20,
    },
    cuenta: {
        color: "#128c7e",
        fontFamily: "roboto",
        fontSize: 15,
    },
    txto: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20,
        color: "#128c7e",
      },
    btnlogin: {
        flexDirection: "row",  //no se aline vertital, horizontal
        justifyContent: "space-around", //distribuye los elementos a lo largo de la pantalla
        width: "100%", //para que agarre toda la pantlla
      },
    btnloginsocial: {
        backgroundColor: "#25d366",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5,
    }
})

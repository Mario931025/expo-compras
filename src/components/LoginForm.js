import React,{useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { InteractionManager, Input,Button,Divider,Icon } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'


export default function LoginForm() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <View style={styles.container}>
            <View
            style={{
                borderBottomColor:"#25D366",
                borderBottomWidth:2,
                width:100
            }}
            />

            <Input placeholder="Correo"/>
            <Input placeholder="Contraseña"/>
            <Button title="Entrar"/>
            <Text>
                ¿No tienes cuenta? 
                <Text>
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
            <Text>O</Text>

            <View>
                <TouchableOpacity>
                    <Icon 
                    size={24}
                    type="material-community"
                    name="google"
                    color="#fff"
                    backgroundColor="transparent"
                    />
                </TouchableOpacity>

                <TouchableOpacity>
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
    }
})

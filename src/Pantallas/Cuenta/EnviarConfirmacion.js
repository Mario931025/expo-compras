import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View ,TextInput,Image,Alert} from 'react-native'
import { Button,Icon } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { useNavigation } from '@react-navigation/core'
import {isEmpty} from 'lodash'
import FirebaseRechapcha from '../../utils/FirebaseRechapcha'
//funciones para resolver el captcha
import {enviarAutentificacionphone}  from '../../utils/Acciones'

export default function EnviarConfirmacion() {
   
   const [country, setcountry] = useState("MX")
   const [callingcode, setcallingcode] = useState("52")
   const [phone, setphone] = useState("");

    // V    MOS A CREAR LA REFRENCIA PARA EL RECAPCHA
    const recapchaVerifier =  useRef();
    const inputphone = useRef();
    const navigation = useNavigation();

  const enviarconfirmacion= async() =>{

      if(!isEmpty(phone)){
          const numero = `${callingcode}${phone}`;
          //la refrencia en la que embianos desde firebaserecapcha por prorps del componente
          //que esta abajo FirebaseRechapcha 
            const verificacionId = await enviarAutentificacionphone(numero,recapchaVerifier)          

            if(!isEmpty(verificacionId)){

                //se pueden pasar valores a los navigate este segundo argumento es mi valor y mi key al mismo tiempo
                // se la al componente cuenta stack a confirmar movil
                navigation.navigate("confirmar-movil",{verificacionId})

            }else{
                Alert.alert("Verificaciòn",
                "introduzca un nùmeor valido",
                [{
                    style:"cancel",
                    text:"Entendido",
                    onPress:()=>{
                        //se limpia el input y poner propiedad focus
                        inputphone.current.clear();
                        inputphone.current.focus();
                    }
                }]
                )
            }
      }

      //si es correcto nues regresa un verificacionid si blanco si no es correctp

  }



    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={require('../../../assets/logo.png')}/>
    <View style={styles.panel}>
        <View 
            style={{
                borderBottomColor:"#25d366",
                borderBottomWidth:2,
                width:100,
            }}
        />
        
        <View style={styles.panelinterno}>
            <Icon
            name="whatsapp"
            type="material-community"
            size={100}
            color="#25d366"
            />
            <Text style={styles.titulo}>Favor ingresa tu nùmero de WhatsApp</Text>
        <View  style={styles.viewtelefono}>
            <CountryPicker
                withFlag
                withCallingCode
                withFilter
                withCallingCodeButton //aparece el codigo
                countryCode={country} //aparecen las banderas
                onSelect={(Country) =>{
                    setcountry(Country.cca2);
                    //aqui el operador sirve para entrar en el array
                    //object {
                      //  "callingCode": Array [
                        //  "52",
                       // ],
                       // "cca2": "MX",
                       // "currency": Array [
                        //  "MXN",
                       // ],
                       // "flag": "flag-mx",
                       // "name": "Mexico",
                      //  "region": "Americas",
                      //  "subregion": "North America",
                      //}
                    setcallingcode(...Country.callingCode)
                }}
            />
        <Text style={{color: "#000"}}>/</Text>
            <TextInput
                placeholder ="Nùmero de whatsapp"
                style={styles.input}
                placeholderTextColor="#fff"
                //guardamos el numero le estado
                onChangeText={(text)=> setphone(text)}
                value={phone}
                //referencia
                ref={inputphone}
            />
            
        </View>
        <Button
            title="Confirmar Nùmero"
            buttonStyle={{backgroundColor: "#25d366",marginHorizontal:20}}
            containerStyle={{marginVertical:20}}
            onPress={()=> enviarconfirmacion()}
        />

        </View>

    </View>
    <FirebaseRechapcha referencia={recapchaVerifier}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#128c7e"
    },
    logo:{
        width:106,
        height:106,
        alignSelf:"center",
        marginVertical:40,

    },
    panel:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:20,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        alignItems:"center",

    },
    panelinterno:{
        flex: 1,
        justifyContent: "space-around",//los elementos se distribuyan a lo largo de la pantalla
        marginHorizontal:20 //no pege ningun elemento en los bordes
    },
    titulo:{
        fontSize:16,
        textAlign:"center",
        color:"#25d366",
        fontWeight: "bold"
    },
    viewtelefono:{
        flexDirection: "row", //para que este en una linea
        alignItems: "center",
        borderRadius:10,
        height:50,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        backgroundColor: "rgba(37,211,106,0.6)"
    },input:{
        width: "80%",
        height: 50,
        marginLeft: 5,
    }
})

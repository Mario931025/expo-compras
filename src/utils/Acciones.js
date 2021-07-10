//estandarizar acciones con bd

import { firebaseapp } from "./firebase";
import * as firebase from 'firebase'

export const validarsesion = (setvalidarsesion) =>{
    
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //
            setvalidarsesion(true)
        }else{
            setvalidarsesion(false)
        }
    })
}

export const cerrarsesion = () =>{
    firebase.auth().signOut();

    console.log("cerro sesión")
}



export const validarPhone = (setphoneauth) =>{
    
    firebase.auth().onAuthStateChanged((user)=>{
        if(user.phoneNumber){
            setphoneauth(true); 
        }
    })
}

//cambio nombre
export const enviarAutentificacionphone =  async (numero,recapcha)=>{
    let verificacionid = "";

    await firebase
    .auth()
    .currentUser.reauthenticateWithPhoneNumber(numero,recapcha.current)
     .then((response)=>{
         //devuelve el valor del verificacion de fb
         verificacionid = response.verificacionid
     })
     .catch(err => console.log(err))

     return verificacionid;
}

//el codigo sera el que introdusca el usuario
export const confirmarcodigo = async(verificacionid,codigo)=>{
let resultado = false;
const credenciales = firebase.auth.PhoneAuthProvider.credential(verificacionid,codigo)

//lo que hace este metodo es que une la credenciales de la autentificacion del numero de telefono
//con las credenciales que usamos incialmente

await firebase.auth().currentUser.linkWithCredential(credenciales).then(response => resultado= true)
.catch(err => {
    console.log(err)
})

return resultado;

}
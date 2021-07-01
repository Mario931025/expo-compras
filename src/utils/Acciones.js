//estandarizar acciones con bd

import { firebaseapp } from "./firebase";
import * as firebase from 'firebase'

export const validarsesion = () =>{
    
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            console.log("usuario logeado")
        }else{
            console.log("no ha iniciado sesiòn")
        }
    })
}
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConfirmarNumero from '../Pantallas/Cuenta/ConfirmarNumero';
import EnviarConfirmacion  from '../Pantallas/Cuenta/EnviarConfirmacion';

const Stack = createStackNavigator();

export default function CuentaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
             component = {EnviarConfirmacion}
             name="enviarConfirmacion"
             options={{
                 title: "Confirma tu número de Telefono",
                 headerStyle : {backgroundColor: "#128c7e"},
                 headerTintColor: "#fff",
             }}/>

        <Stack.Screen
             component = {ConfirmarNumero}
             name="confirmar-movil"
             options={{
                 title: "Confirma número",
                 headerStyle : {backgroundColor: "#128c7e"},
                 headerTintColor: "#fff",
             }}/>
        </Stack.Navigator>
    )
}

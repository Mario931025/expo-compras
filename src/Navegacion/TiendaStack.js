import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Tienda from '../Pantallas/Tienda/Tienda';
import AddProduct from '../Pantallas/Tienda/AddProduct';
import Contacto from '../Pantallas/Tienda/Contacto';
import MensajeList from '../Pantallas/Tienda/MensajesList';
import Detalle from '../Pantallas/Tienda/Detalle';

const Stack = createStackNavigator();

export default function TiendaStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            component={Tienda}
            name="tienda"
            options={{headerShown : false}} //no tiene menu navegacion
            />
             <Stack.Screen
            component={AddProduct}
            name="add-product"
            options={{title: "Agregar Nuevo Producto",
            headerStyle:{backgroundColor : "#128C7E"},
            headerTintColor: "#fff" //color de letra del titulo
        }}
            />
             <Stack.Screen
            component={Detalle}
            name="detalle"
            options={{title: "Agregar Nuevo Producto",
            headerStyle:{backgroundColor : "#128C7E"},
            headerTintColor: "#fff" //color de letra del titulo
             }}/>
             <Stack.Screen
            component={Contacto}
            name="contacto"
            options={{title: "Agregar Nuevo Producto",
            headerStyle:{backgroundColor : "#128C7E"},
            headerTintColor: "#fff" //color de letra del titulo
             }}/>
            
        </Stack.Navigator>
    )
}



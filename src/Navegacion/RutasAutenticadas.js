import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' 
//crea una barra en la parte de abajo de la app
import {createDrawerNavigator} from "@react-navigation/drawer";
//crea la barra de navegacion laterial 
import {Icon} from 'react-native-elements';

import ShopButton from '../components/ShopButton';
import TiendaStack from './TiendaStack';
import PerfilStack from './PerfilStack'
import MiTiendaEstado from './MiTiendaEstado';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
    return(
        <Tab.Navigator
        initialRouteName="Tienda"
        tabBarOptions={{
            inactiveTintColor:"#fff",
            activeTintColor:"#fff",
            style:{
                borderTopLeftRadius:60,
                borderTopRightRadius:60,
                alignItems:"center",
                backgroundColor:"#128C7E",
                paddingBottom:5,//sube iconos hacia arriba
            }
        }}

        //establece iconos del tabbar
        screenOptions ={
            //contiene el  valor de la pantalla actual
            ({route})=>({
                //permite dibujar de manera dinamica los componentes de intertfaz
                tabBarIcon: ({color})=> mostrarIcono(route,color)  //devuleve un icono y un corlor que le asigenemos
            })}
        >
            <Tab.Screen
             component = {TiendaStack}
             name = "Tienda"
             options = {{tile:"Tienda"}}
            />
            <Tab.Screen
            component = {MiTiendaEstado}
            name = "mitienda"
            options = {{title:"",tabBarIcon: ()=> <ShopButton/> }}  //propiedad para que reciba un componente 
            />
              <Tab.Screen
            component = {PerfilStack}
            name = "cuenta"
            options = {{title:"Cuenta"}}
            />
        </Tab.Navigator>
    )
}

function mostrarIcono(route,color){
    let iconName = "";

    switch(route.name){
        case "Tienda":
            iconName = "cart-outline";
            break;

        case "cuenta":
            iconName = "account-circle-outline";
            break;

        case "mitienda":
            iconName = "cart-outline";
            break;
    }

    return(
        <Icon type="material-community" name={iconName} size={24} color={color}/>
    )

}

export default function RutasAutenticadas(){
    return (
        <NavigationContainer>
            <TabBar />
        </NavigationContainer>

    )
}
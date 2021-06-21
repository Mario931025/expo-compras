import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Pantallas/Cuenta/Login'
import Register from '../Pantallas/Cuenta/Registrar';
import RestaurarPassword from '../Pantallas/Cuenta/RestaurarPassword'

const Stack = createStackNavigator();

const RutasnoAutenticadas = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="login"
            screenOptions={{headerShown: false}} //ninguna de estas pantalla se muestre el header por defecto
            >
                <Stack.Screen component={Login} name="login"/>
                <Stack.Screen component={Register} name="Register"/>
                <Stack.Screen component={RestaurarPassword} name="lostpassword"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RutasnoAutenticadas

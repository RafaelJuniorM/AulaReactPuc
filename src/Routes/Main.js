// Importa React e componentes básicos
import React from "react";
import { View } from "react-native";

// Importa os componentes de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importar as telas utilizadas na navegação
import Home from "../screens/Home";
import Abastecimento from "../screens/Abastecimento";


// criando a pilha de navegação 
const Stack = createNativeStackNavigator(); 

export default function Main(){
    return(  // options={{header:() =>null}} => retira o header criado pelo navegation e utiliza o native-paper
        <Stack.Navigator> 
            <Stack.Screen name="Home" component={Home} options={{header:() =>null}}/>
            <Stack.Screen name="Abastecimento" component={Abastecimento} options={{header:() =>null}}/>
        </Stack.Navigator>
    )
}
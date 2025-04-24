import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';


import Main from "./src/Routes/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
      <NavigationContainer>
       <Main/>
    </NavigationContainer>
      </PaperProvider>
      
    </SafeAreaProvider>
   
  );
}


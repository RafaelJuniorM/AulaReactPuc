import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';


import Main from "./src/Routes/Main";

export default function App() {
  return (
    <NavigationContainer>
       <Main/>
    </NavigationContainer>
  
  );
}


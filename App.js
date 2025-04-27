import React, { useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createTable } from "./src/database/db";
import { ActivityIndicator} from 'react-native';
import Main from "./src/Routes/Main";

export default function App() {

  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
   async function initBD() {
      await createTable();
      setDbReady(true);
   }
   initBD();
  }, []);

  if(!dbReady){
    return <ActivityIndicator size="large" color="#6200ee" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

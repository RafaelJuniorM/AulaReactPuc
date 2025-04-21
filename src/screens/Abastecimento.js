import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { List, Text, FAB } from "react-native-paper";

// import sempre necessario para navegar entre telas
import {useNavigation} from '@react-navigation/native';

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";




export default function Abastecimento() {    

  const navigation = useNavigation();

  return (
    <Container>
      <Header 
        title={"Abastecimento"} 
        goBack={()=>navigation.goBack()}
      ></Header>
      <Body>
        
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
 
 
});

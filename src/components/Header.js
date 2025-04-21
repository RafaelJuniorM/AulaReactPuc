import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  PaperProvider,
  TextInput,
  Text,
} from "react-native-paper";

export default function Header({ title, goBack }) {
  return (
    <Appbar.Header style={styles.header}>
      {
        goBack &&  // se existir a propriedade goBack a pagina ira retornar
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title}  />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9370DB",
    color: "#fff",
  },
  title:{
    color: "#fff"
  }
});

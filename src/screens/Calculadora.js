import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  Appbar,
  Button,
  PaperProvider,
  TextInput,
  Text,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "./../components/Container";
import Header from "./../components/Header";
import Body from "./../components/Body";
import Input from "./../components/Input";

export default function Calculadora() {
  const [gas, setGas] = useState("");
  const [etanol, setEtanol] = useState("");
  const [resultado, setResultado] = useState("");

  const handleCalcular = () => {
    if (!gas || gas <= 0 || !etanol || etanol <= 0) {
      Alert.alert(
        "Atenção!!! É obrigatorio informar os valores da gasolina e etanol. "
      );
    } else {
      let percentual = Math.round((etanol / gas) * 100);
      if (percentual < 70) {
        setResultado(percentual + "% Recomendamos o uso do Etanol.");
      } else {
        setResultado(percentual + "% Recomendamos o uso da Gasolina.");
      }
    }
  };

  return (
    <Container>
      <PaperProvider>
        <Header title={"Calculadora Flex"} />

        <Body>
          <Input
            label={"Preço Gasolina"}
            value={gas}
            onChangeText={(text) => setGas(text)}
          />
          <Input
            label={"Preço Etanol"}
            value={etanol}
            onChangeText={(text) => setEtanol(text)}
          />
          <Button mode="contained" onPress={() => handleCalcular()}>
            {" "}
            Calcular
          </Button>

          <Text style={styles.text}> {resultado} </Text>
        </Body>
      </PaperProvider>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    margin: 8,
    fontSize: 20,
  },
});

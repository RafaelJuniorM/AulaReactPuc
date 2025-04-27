import React, { useEffect, useState, useCallback } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { List, Text, FAB } from "react-native-paper";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import { listarAbastecimentos } from "../Routes/abastecimentoServices";

export default function Gastos() {
  const navigation = useNavigation();

  const [abastecimento, setAbastecimentos] = useState([]);

  async function carregarAbastecimento() {
    const dados = await listarAbastecimentos();
    console.log(dados);
    setAbastecimentos(dados);
  }

  useFocusEffect( 
    useCallback(() => {
      carregarAbastecimento();
    }, [])
  );
  const renderItem = ({ item }) => (
    <List.Item
      title={
        "R$" + item.valor.toFixed(2) + " ( R$" + item.preco.toFixed(2) + ")"
      }
      description={item.odometro + "Km"} // se tipo for 0 sera vermelho senao verde
      left={(props) => (
        <List.Icon
          {...props}
          icon="gas-station"
          color={item.tipo == 1 ? "red" : "green"}
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignItems: "center" }}>
          {" "}
          {item.data}{" "}
        </Text>
      )}
      onPress={() => navigation.navigate("Abastecimento", { item })} // Ao pressionar ira para a tela de abastecimento passando como paramentro o item
    />
  );

  return (
    <Container>
      <Header title={"Full Manager"}></Header>
      <Body>
        <FlatList
          data={abastecimento}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate("Abastecimento")}
        />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#9370DB",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

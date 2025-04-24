import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { List, Text, FAB } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

const DATA = [
  {
    id: 1,
    tipo: 0,
    data: "23/04/2025",
    preco: 5.59,
    valor: 100,
    odometro: 157500,
  },
  {
    id: 2,
    tipo: 0,
    data: "25/04/2025",
    preco: 5.59,
    valor: 50,
    odometro: 159500,
  },
  {
    id: 3,
    tipo: 0,
    data: "01/05/2025",
    preco: 5.62,
    valor: 200,
    odometro: 160500,
  },
  {
    id: 4,
    tipo: 1,
    data: "02/05/2025",
    preco: 4.52,
    valor: 150,
    odometro: 160900,
  },
];

export default function Gastos() {
  const navigation = useNavigation();

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
          color={item.tipo == 0 ? "red" : "green"}
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
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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

import React, { use, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Text,
  RadioButton,
  TextInput,
  Button,
  Appbar,
} from "react-native-paper";

//importando a biblioteca Calendar
import { Calendar } from "react-native-calendars";

// import sempre necessario para navegar entre telas
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Input from "../components/Input";

export default function Abastecimento() {
  const navigation = useNavigation();
  const [TipoCombustivel, setTipoCombustivel] = React.useState("Gasolina");

  //colocando a data padrao
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [showCalendar, setShowCalendar] = useState(false); //abrir ou nao o popup calendario

  //dados inputs
  const [tipo, setTipo] = useState("gas");
  const [preco, setPreco] = useState("");
  const [valor, setValor] = useState("");
  const [odometro, setOdometro] = useState("");
  const [data, setData] = useState("");

  // criando função de exluir/salvar
  const handleSalvar = () => {
    console.log("salvar");
  };

  const handleExcluir = () => {
    console.log("Excluiu");
  };

  //funçao para lidar com a data selecionada
  const selecionarData = (day) => {
    setDataSelecionada(day.dateString);
    setShowCalendar(false); // Oculta o calendário após selecionar
  };

  return (
    <Container>
      <Header title={"Abastecimento"} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        <Appbar.Action icon="trash-can" onPress={handleExcluir} />
      </Header>
      <Body style={{ paddingBottom: 30 }}>
        <View style={styles.containerCheck}>
          <View style={styles.containerCheckItem}>
            <RadioButton
              value="first"
              status={TipoCombustivel === "Gasolina" ? "checked" : "unchecked"}
              onPress={() => setTipoCombustivel("Gasolina")}
              color="red"
            />
            <Text>Gasolina</Text>
          </View>
          <View style={styles.containerCheckItem}>
            <RadioButton
              value="first"
              status={TipoCombustivel === "Etanol" ? "checked" : "unchecked"}
              onPress={() => setTipoCombustivel("Etanol")}
              color="green"
            />
            <Text>Etanol</Text>
          </View>
        </View>
        {showCalendar && (
          <Calendar
            onDayPress={selecionarData}
            markedDates={{
              [dataSelecionada]: {
                selected: true,
                selectedColor: "#6200ee",
              },
            }}
            theme={{
              selectedDayTextColor: "#fff",
              todayTextColor: "#6200ee",
              arrowColor: "#6200ee",
            }}
            hideExtraDays
          />
        )}
        <TouchableOpacity  style={{paddingVertical:14}} onPress={() => setShowCalendar(true)}>
          <Input
            label="Data"
            value={dataSelecionada}
            left={<TextInput.Icon icon="calendar" />}
            editable={false}
          />
        </TouchableOpacity>
        <Input
          label="Preço"
          value={preco}
          onChangeText={(text) => setPreco(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />
        <Input
          label="Valor"
          value={valor}
          onChangeText={(text) => setValor(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />
        <Input
          label="Odometro"
          value={odometro}
          onChangeText={(text) => setOdometro(text)}
          left={<TextInput.Icon icon="camera-timer" />}
        />

        <Button
          mode="contained"
          color={"red"}
          style={styles.button}
          onPress={handleSalvar}
        >
          {" "}
          Salvar
        </Button>

        <Button
          mode="contained"
          background={"red"}
          style={styles.button}
          onPress={handleExcluir}
        >
          {" "}
          Excluir
        </Button>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerCheck: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 8,
  },
  containerCheckItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    margin: 8,
  },
});

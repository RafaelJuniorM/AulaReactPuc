import React, { use, useEffect, useState } from "react";
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

// import sempre necessario para navegar entre telas useRoute para pegar dados de outra pagina
import { useNavigation, useRoute } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";
import Input from "../components/Input";
import { inserirAbastecimento } from "../Routes/abastecimentoServices";

export default function Abastecimento({}) {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params ? route.params : {}; // verificando se veio um parametro para a rota 
  
  //colocando a data padrao
  const [showCalendar, setShowCalendar] = useState(false); //abrir ou nao o popup calendario

  //dados inputs
  const [tipo, setTipo] = useState("Gasolina");
  const [preco, setPreco] = useState(null);
  const [valor, setValor] = useState(null);
  const [odometro, setOdometro] = useState(null);
  const [data, setDataSelecionada] = useState("");

  useEffect(() => {
    if(item){
      setTipo(item.tipo == 1 ? 'Gasolina' : 'Etanol');
      setDataSelecionada(item.data);
      setPreco(item.preco.toString());
      setValor(item.valor.toString());
      setOdometro(item.odometro.toString());
    }
  },[item]);

  // criando função de exluir/salvar os dados no BD 
  const handleSalvar = async () => {
      if(!preco || !valor || !odometro || !data ){
        alert('Preencha todos os campos!!!');
        return;
      }
      const novoAbastecimento = {
        tipo: tipo === 'Etanol' ? 2 : 1,
        data: data,
        preco: parseFloat(preco),
        valor: parseFloat(valor),
        odometro: parseInt(odometro),
      };
      console.log(novoAbastecimento)
      await inserirAbastecimento(novoAbastecimento);
      navigation.goBack();
  };

  const handleExcluir = async () => {
    if (item && item.id) {
      await deletarAbastecimento(item.id);
      navigation.goBack();
    }
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
        {
          item && 
          <Appbar.Action icon="trash-can" onPress={handleExcluir} />
        }
        
      </Header>
      <Body style={{ paddingBottom: 30 }}>
        <View style={styles.containerCheck}>
          <View style={styles.containerCheckItem}>
            <RadioButton
              value="first"
              status={tipo === "Gasolina" ? "checked" : "unchecked"}
              onPress={() => setTipo("Gasolina")}
              color="red"
            />
            <Text>Gasolina</Text>
          </View>
          <View style={styles.containerCheckItem}>
            <RadioButton
              value="first"
              status={tipo === "Etanol" ? "checked" : "unchecked"}
              onPress={() => setTipo("Etanol")}
              color="green"
            />
            <Text>Etanol</Text>
          </View>
        </View>
        {showCalendar && (
          <Calendar
            onDayPress={selecionarData}
            markedDates={{
              [data]: {
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
        <TouchableOpacity>
          <Input
            onPress={() => setShowCalendar(true)}
            label="Data"
            value={data}
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
          style={[styles.button, styles.buttonSalvar]}
          onPress={handleSalvar}
        >
          {" "}
          Salvar
        </Button>

        {
          item &&
          <Button
          mode="contained"
          background={"red"}
          style={[styles.button, styles. buttonExcluir]}
          onPress={handleExcluir}
        >
          {" "}
          Excluir
        </Button>
        }
     
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
  buttonExcluir: {
    backgroundColor:'#F44336',
  },
  buttonSalvar: {
    backgroundColor:'#4CAF50',
  }
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function Input(props) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="default"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ECF0F1",
        marginBottom: 8,
      },
});

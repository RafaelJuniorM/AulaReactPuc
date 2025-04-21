import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Body({children}){
    return(
        <SafeAreaProvider style={styles.body}>
            {children}
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 8,
      },
})
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Destacado from "./src/Componentes/Destacado";
import PerfilPublico from "./src/Pantallas/Perfil-Publico/Perfil-Publico";


export default function App() {
  return (
    <View style={styles.container}>
      <Destacado />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 383,
    alignSelf: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Actividad() {
  const datos = {
    descripcion: "Yoga para ti, para mí y para todos! Aeroyogabaq",
    compartido: "@karendagy ha compartido esto hoy",
    foto: "https://lorempixel.com/200/200/people/",
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `${datos.foto}`,
        }}
      />
      <View style={styles.info}>
        <Text style={[styles.text, styles.descripcion]}>
          {datos.descripcion}
        </Text>
        <Text style={[styles.text, styles.compartido]}>{datos.compartido}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    marginTop:10,
    columnGap:10,
  },
  img: {
    width: 54.93,
    height: 54,
  },
  info: {
    height: "100%",
    justifyContent: "space-evenly",
  },
  text: {
    fontFamily: "Proxima Nova",
  },
  descripcion: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
  compartido: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#7E8FB9",
  },
});

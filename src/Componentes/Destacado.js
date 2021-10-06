import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default function Destacado() {
  const datos = {
    titulo: "Dra Alejandra website profesional",
    lugar: "Website",
    descripcion:
      "Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum.",
    foto: "https://lorempixel.com/200/200/people/",
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.nombre]}>{datos.titulo}</Text>
      <Text style={[styles.text, styles.lugar]}>{datos.lugar}</Text>

      <Text style={[styles.text, styles.descripcion]}>{datos.descripcion}</Text>
      <Image
        style={styles.img}
        source={{
          uri: `${datos.foto}`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FD",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    height: 130,
    width: 270,
    borderRadius: 8,
    borderColor: "#C2C4EE",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    position: "absolute",
    top: 15,
    right: 15,
  },
  text: {
    fontFamily: "Proxima Nova",
  },
  nombre: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16.8,
    color: "#424049",
    width: "60%",
  },
  lugar: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#7E8FB9",
    width: "60%",
  },
  descripcion: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
});

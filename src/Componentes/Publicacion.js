import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default function Publicacion() {
  const datos = {
    fotoPerfil: "https://lorempixel.com/200/200/people/",
    nombre: ["Armando Lopez", "@arlopez21", "2h"],
    descripcion: "Group name lorem ipsum dolor amet sim athem",
    imagen: "https://lorempixel.com/200/200/people/",
  };
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.fotoPerfil}
          source={{
            uri: `${datos.fotoPerfil}`,
          }}
        />
        <View style={styles.titulo}>
          <Text style={[styles.text, styles.nombre]}>
            {datos.nombre.join("  •  ")}
          </Text>
          <Text style={[styles.text, styles.descripcion]}>
            {datos.descripcion}
          </Text>
        </View>
        <View style={styles.iconos}>
          <Icon name="bookmark" color="#C2C4EE" size={30} />
          <Icon name="more-horiz" color="#5B74FB" size={30} />
        </View>
      </View>
      <Image
        style={styles.imagen}
        source={{
          uri: `${datos.imagen}`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    borderColor: "#C2C4EE",
    borderStyle: "solid",
    borderWidth: 1,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    justifyContent: "space-around",
    marginBottom: 10,
    width: 316.74,
  },
  fotoPerfil: {
    width: 45,
    height: 45,
    borderRadius: "50%",
  },
  icon: {
    position: "absolute",
    top: -10,
    right: 10,
    zIndex: 1,
  },
  titulo: { width: 200 },
  text: {
    fontFamily: "Proxima Nova",
  },
  nombre: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
  descripcion: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    color: "#000000",
  },
  iconos: {},
  imagen: {
    width: 316.74,
    height: 158.87,
  },
});

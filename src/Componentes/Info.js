import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default function Info() {
  const datos = {
    nombre: "Alejandra Martinez Ruiz",
    profesion: "Instructora de yoga",
    foto: "https://lorempixel.com/200/200/people/",
    rubros: ["Yoga", "Meditacion holística"],
    tags: [
      "#uxui",
      "#freelance",
      "#uxdesign",
      "#Educación",
      "#Webdesign",
      "#culturadigital",
    ],
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `${datos.foto}`,
        }}
      />
      <View style={styles.icon}>
        <Icon
          name="bookmark"
          color="#C2C4EE"
          size={40}
          onPress={() => console.log("hello")}
        />
      </View>
      <View style={styles.datos}>
        <Text style={[styles.text, styles.nombre]}>{datos.nombre}</Text>
        <Text style={[styles.text, styles.profesion]}>{datos.profesion}</Text>
        <Text style={[styles.text, styles.rubros]}>
          {datos.rubros.join("  •  ")}
        </Text>
        <LinearGradient colors={["#6560F0", "#7F8FFF"]} style={styles.linea} />
        <Text style={[styles.text, styles.tags]}>{datos.tags.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
    height: 185,
    width: 344,
    borderRadius: 8,
  },
  datos: {
    alignItems: "center",
    justifyContent: "space-around",
    height: 185,
    paddingTop: 40,
    paddingBottom: 20,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    position: "absolute",
    top: -40,
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    top: -10,
    right: 10,
    zIndex: 1,
  },
  text: {
    textAlign: "center",
    fontFamily: "Proxima Nova",
    width: "60%",
  },
  nombre: {
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#424049",
  },
  profesion: {
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#424049",
  },
  rubros: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#5B74FB",
  },
  tags: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#7E8FB9",
  },
  linea: {
    backgroundColor: "#6560F0",
    width: 21,
    height: 3,
    borderRadius: 10,
  },
});

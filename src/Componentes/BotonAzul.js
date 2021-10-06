import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default function BotonAzul({ ancho, alto, texto, icon }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#4E31EB",
      alignItems: "center",
      justifyContent: "center",
      columnGap: 10,
      width: ancho,
      height: alto,
      borderRadius: 8,
    },
    text: {
      color: "white",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
    },
  });
  console.log(ancho, alto);
  return (
    <View style={styles.container}>
      {icon ? (
        <Icon
          name={icon}
          color="white"
          size={35}
          onPress={() => console.log("hello")}
        />
      ) : null}
      <Text style={styles.text}>{texto}</Text>
    </View>
  );
}

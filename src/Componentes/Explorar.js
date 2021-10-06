import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";

export default function Explorar({ titulo }) {
  return (
    <View style={styles.explorar}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.rigth}>
        <Text style={styles.text}>Explorar</Text>
        <Icon name="chevron-right" color="#5B74FB" size={20} />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  explorar: {
    flexDirection: "row",
    margin: 10,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  titulo: {
    fontFamily: "Proxima Nova",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#424049",
  },
  rigth: {
    flexDirection: "row",
    columnGap: 5,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    fontFamily: "Proxima Nova",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#5B74FB",
  },
});

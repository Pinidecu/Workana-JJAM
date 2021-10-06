import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";

export default function BarraIconos({titulo}) {
  return (
    <View style={styles.iconos}>
      <Icon name="chevron-left" color="#5B74FB" size={20} />
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.rigth}>
        <Icon name="add" color="#5B74FB" size={20} />
        <Icon name="more-horiz" color="#5B74FB" size={20} />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  iconos: {
    flexDirection: "row",
    width: "100%",
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  titulo: {
    fontFamily: "Proxima Nova",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    color: "#5B74FB",
  },
  rigth: {
    flexDirection: "row",
    columnGap: 5,
  },
});

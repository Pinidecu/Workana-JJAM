import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F7FE",
    alignItems: "center",
    justifyContent: "center",
    width: 383,
    alignSelf: "center",
  },
  iconos: {
    flexDirection: "row",
    width: "100%",
    margin: 20,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between",
  },
  rigth: {
    flexDirection: "row",
    columnGap: 5,
  },
  titulo: {
    width: 175,
    flexDirection: "row",
    columnGap: 5,
    position: "relative",
    right: -145,
    top: -10,
    zIndex: 1,
  },
  tituloText: {
    color: "#4E31EB",
    fontFamily: "Proxima Nova",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
  },
  botones: {
    width: 344,
    margin: 0,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});

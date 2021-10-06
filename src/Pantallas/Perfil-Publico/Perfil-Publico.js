import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Info from "../../Componentes/info";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import { styles } from "./Perfil-Publico.module";

export default function PerfilPublico() {
  return (
    <View style={styles.container}>
      <View style={styles.iconos}>
        <Icon name="chevron-left" color="#5B74FB" size={20} />
        <View style={styles.rigth}>
          <Icon name="add" color="#5B74FB" size={20} />
          <Icon name="more-horiz" color="#5B74FB" size={20} />
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </View>
      </View>
      <View style={styles.titulo}>
        <Text style={styles.tituloText}>Perfil profesional</Text>
        <Icon name="forward" color="#4E31EB" size={20} />
      </View>
      <Info />
      <View style={styles.botones}>
        <BotonAzul ancho={177} alto={55.08} texto={"AGENDAR ASESORIA"} />{" "}
        <BotonAzul ancho={155} alto={55.08} texto={"MENSAGE"} icon={"forum"} />
      </View>
    </View>
  );
}

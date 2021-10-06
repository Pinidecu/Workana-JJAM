import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BarraIconos from "./src/Componentes/BarraIconos";
import Destacado from "./src/Componentes/Destacado";
import Explorar from "./src/Componentes/Explorar";
import Publicacion from "./src/Componentes/Publicacion";
import PerfilPublico from "./src/Pantallas/Perfil-Publico/Perfil-Publico";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Perfil Publico"
          component={() => <PerfilPublico />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="more-horiz" color="#5B74FB" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Publicacion"
          component={() => <Publicacion />}
          options={{
            tabBarIcon: () => (
              <Icon name="add" color="#5B74FB" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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

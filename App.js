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
import {
  HomeOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={() => <PerfilPublico />}
          options={{
            tabBarIcon: () => <HomeOutlined style={{ color: "#5B74FB" }} />,
          }}
        />
        <Tab.Screen
          name="Salas"
          component={() => <Publicacion />}
          options={{
            tabBarIcon: () => (
              <VideoCameraOutlined style={{ color: "#5B74FB" }} />
            ),
          }}
        />
        <Tab.Screen
          name="Eventos"
          component={() => <Publicacion />}
          options={{
            tabBarIcon: () => (
              <Icon name="online-prediction" color="#5B74FB" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={() => <Publicacion />}
          options={{
            tabBarIcon: () => <UserOutlined style={{ color: "#5B74FB" }} />,
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

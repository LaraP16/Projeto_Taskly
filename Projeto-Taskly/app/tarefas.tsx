import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

import { Link, useRouter } from "expo-router";

import { StatusBar } from "expo-status-bar";
import planejamento from "./planejamento";

export default function Tarefas() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topo}></View>
        <View style={styles.saudacao}>
          <Text style={styles.textsaudacao}>Bom dia José!</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.mais}>
            <Image
              source={require("../assets/images/+.png")}
              style={styles.imais}
            />
          </View>
          <Text style={styles.plano}>Seus planejamentos:</Text>
        </View>

        <View>
          <Image
            source={require("../assets/images/academia.png")}
            style={styles.academia}
          />

          <TouchableOpacity onPress={() => router.push("./planejamento")}>
            <Image
              source={require("../assets/images/estudos.png")}
              style={styles.academia}
            />
          </TouchableOpacity>
          
          <Image
            source={require("../assets/images/compras.png")}
            style={styles.academia}
          />
        </View>

        <View style={styles.visualizar}>
          <Text style={styles.visualizarText}>Visualizar todos</Text>
        </View>

        <Text style={styles.proximos}>Próximos eventos:</Text>

        <Image
          source={require("../assets/images/evento.png")}
          style={styles.evento}
        ></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  // container2: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  // },

  topo: {
    backgroundColor: "#F5EACF",
    width: "100%",
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    shadowRadius: 5,
    shadowColor: "#000",
  },

  rodape: {
    backgroundColor: "#F5EACF",
    height: 30,
    width: "100%",
  },

  body: {
    flexDirection: "row",
    marginTop: -10,
  },

  saudacao: {
    backgroundColor: "#F5F5F5",
    width: 300,
    height: 60,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
  },

  textsaudacao: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 30,
  },

  mais: {
    backgroundColor: "#C9B8A6",
    width: 60,
    height: 45,
    alignItems: "center",
    paddingLeft: 5,
    borderRadius: 15,
    marginTop: 30,
  },

  imais: {
    height: 50,
  },

  plano: {
    padding: 20,
    paddingTop: 35,
    fontWeight: "bold",
    fontSize: 25,
  },

  academia: {
    marginLeft: 10,
  },

  visualizar: {
    backgroundColor: "#C9B8A6",
    borderRadius: 20,
    width: 190,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  visualizarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  proximos: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },

  evento: {
    marginBottom: 10,
    marginLeft: 5,
  },
});

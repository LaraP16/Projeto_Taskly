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
//import CheckBox from "@react-native-community/checkbox";

export default function planejamento() {
  const [step, setStep] = useState(1);

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image
          style={styles.imagem}
          source={require("../assets/images/logo.png")}
        />
      </View>

      <View style={styles.sub}>
        <Image
          source={require("../assets/images/seta.png")}
          style={styles.seta}
        ></Image>

        <Text style={styles.plano}>Planejamento Estudos</Text>

        <View style={styles.mais}>
          <Image
            source={require("../assets/images/+.png")}
            style={styles.imais}
          />
        </View>
      </View>

      <View style={styles.bloco}>
        <View style={styles.sub}>
          <Image source={require("../assets/images/celebro.png")}></Image>
          <Text style={styles.meta}>Metas de Estudos</Text>
        </View>

        <View style={styles.sub}>
          <Image
            source={require("../assets/images/ponto.png")}
            style={styles.ponto}
          ></Image>
          <Text style={styles.lista}> Ler livro Matéria 1</Text>
        </View>

        <View style={styles.sub}>
          <Image
            source={require("../assets/images/ponto.png")}
            style={styles.ponto}
          ></Image>
          <Text style={styles.lista}> Apresentação seminário</Text>
        </View>

        <View style={styles.sub}>
          <Image
            source={require("../assets/images/ponto.png")}
            style={styles.ponto}
          ></Image>
          <Text style={styles.lista}> Redação</Text>
        </View>
      </View>

      <Image
        source={require("../assets/images/calendario.png")}
        style={styles.calendario}

      ></Image>

      <View style={styles.listacheck}>
        <Image source={require("../assets/images/calendario.png")}></Image>
        <Text>Tarefas:</Text>
        <View>
          {/* <CheckBox
            style={styles.box}
            value={isChecked}
            onValueChange={setChecked}
          /> */}
          <Text>Ler Livro Matéria 1</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  topo: {
    backgroundColor: "#F5EACF",
    width: 410,
    height: 130,
    borderRadius: 20,
    alignItems: "center",
    shadowRadius: 5,
    shadowColor: "black",
  },

  imagem: {
    width: 120,
    height: 150,
    marginTop: 10,
  },

  bloco: {
    backgroundColor: "#E8DDD0",
    width: 350,
    height: 230,
    marginTop: 20,
    borderRadius: 15,
    paddingLeft: 20,
    paddingBottom: 150,
  },

  sub: {
    flexDirection: "row",
  },

  seta: {
    marginRight: 10,
    marginTop: 23,
  },

  plano: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    marginTop: 12,
  },

  mais: {
    backgroundColor: "#C9B8A6",
    width: 50,
    height: 37,
    alignItems: "center",
    paddingLeft: 5,
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 15,
  },

  imais: {
    height: 40,
  },

  meta: {
    fontSize: 30,
    paddingLeft: 20,
    paddingBottom: 10,
  },

  lista: {
    fontSize: 20,
  },

  ponto: {
    marginTop: 10,
  },

  checkbox: {
    width: 35,
    height: 35,
    marginRight: 8,
    borderRadius: 8,
  },

  box: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  listacheck: {
    flexDirection: "row",
  },
  
  calendario:{
    margin: 10,
    
  },
});

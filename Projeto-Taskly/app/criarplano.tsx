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

import CheckBox from "expo-checkbox";

import { Link, useRouter } from "expo-router";

import { StatusBar } from "expo-status-bar";
//import CheckBox from "@react-native-community/checkbox";

export default function planejamento() {
  const [step, setStep] = useState(1);

  const [livro, Livro] = useState(false);
  const [apresentacao, Apresentação] = useState(false);
  const [redacao, Redacao] = useState(false);
  const [casa, Casa] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image
          style={styles.imagem}
          source={require("../assets/images/logo.png")}
        />
      </View>

      <ScrollView>
        <View style={styles.sub}>

        <TouchableOpacity onPress={() => router.push("./tarefas")}>
          <Image
            source={require("../assets/images/seta.png")}
            style={styles.seta}
          ></Image>
          </TouchableOpacity>

          <Text style={styles.plano}>Novo Planejamento</Text>

          <View style={styles.mais}>
            <Image
              source={require("../assets/images/+.png")}
              style={styles.imais}
              />
              </View>
          </View>

          <View>
            <Text style={styles.nome}>Nome: </Text>
          </View>
          <View>
            <Text style={styles.nome}>Selecionar Capa: </Text>
            <Image source={require("../assets/images/escolha.png")}>

            </Image>
          </View>
            <View>
                <Image source={require("../assets/images/fundo.png")}>

                </Image>
            </View>


          <View>
            <Text style={styles.nome}>Nome: </Text>
          </View>
</ScrollView>
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
      padding: 10
    },
  
    bloco: {
      backgroundColor: "#E8DDD0",
      width: 350,
      height: 230,
      marginTop: 20,
      borderRadius: 15,
      paddingBottom: 150,
      marginLeft: 20
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
})
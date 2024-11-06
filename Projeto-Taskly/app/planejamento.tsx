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

//import CheckBox from "expo-checkbox";

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

      <ScrollView>
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

        <View style={styles.todalista}>
          <View style={styles.listacheck}>
            <Image
              style={styles.calendario}
              source={require("../assets/images/calendario.png")}
            ></Image>

            <View>
              <Text style={styles.afazeres}>Tarefas:</Text>

              <Text style={styles.afazeres}>Ler Livro Matéria 1</Text>
              <Text style={styles.afazeres}>Apresentação</Text>
              <Text style={styles.afazeres}>Redação</Text>
              <Text style={styles.afazeres}>Limpar casa</Text>

              {/* <CheckBox

style={styles.box}
value={isChecked}
onValueChange={setChecked}
/> */}
            </View>
          </View>
        </View>
        <Image
          style={styles.tabela}
          source={require("../assets/images/tabela.png")}
        ></Image>

          <View style={styles.baixos}>


        <View style={styles.ladoe}>
            <Image
              style={styles.dia}
              source={require("../assets/images/dia.png")}
            ></Image>

            <View style={styles.festa}>
              <Text>
                Festa:
                <Image source={require("../assets/images/festa.png")}></Image>
              </Text>

              <Text>Faltam 1d, 9h, 50min e 30s</Text>
            </View>
          </View>

          <View style={styles.lado}>
            <View>
              <Text style={styles.eventos}>Próximos eventos:</Text>
            </View>
            {/* <Image
              // style={styles.relogio}
              // source={require("../assets/images/relogio.png")}
            ></Image> */}
          </View>


        </View>

        <StatusBar style="auto" />
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

  todalista: {
    display: "flex",
  },

  listacheck: {
    flexDirection: "row",
    alignItems: "center",
  },

  calendario: {
    margin: 10,
    marginRight: 30,
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  afazeres: {
    flexDirection: "row",
    fontWeight: "black",
  },

  tabela: {
    width: 350,
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },

  dia: {
    width: 120,
    height: 90,
  },
  relogio: {
    width: 50,
    height: 50,
  },

  lado: {
    backgroundColor: "#D8CCBF",
    marginLeft: 10,
    width: 200,
    height: 300,
    borderRadius: 15,
    padding: 10
  },
  
  ladoe: {
    backgroundColor: "blue",
    marginLeft: 20
  },
  
  eventos: {
    fontSize: 20,
    textAlign: 'center',
  },

  baixos:{
    display: 'flex',
    flexDirection: 'row'
  },

  festa: {
    backgroundColor: 'green',
    width: 120
  }
});

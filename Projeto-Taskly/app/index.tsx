import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

import { Link, useRouter } from "expo-router";

import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handlerPasso = (numero) => {
    setStep(numero);
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rsenha, setRsenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image
          style={styles.imagem}
          source={require("../assets/images/logo-nome.png")}
        />
      </View>

      {step === 1 && (
        <ScrollView>
          <View>
            <Text style={styles.titulo1}>Faça Login na Sua Conta</Text>

            <Text style={styles.texto}>E-mail</Text>
            <TextInput
              placeholder="Insira seu endereço de E-mail"
              style={styles.campo}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Text style={styles.texto}>Senha</Text>
            <TextInput
              placeholder="Insira Sua Senha"
              style={styles.campo}
              onChangeText={(text) => setSenha(text)}
              value={senha}
            />

            <View style={styles.botaoav}>
              <Link href="/tarefas">
                <Text style={styles.av1}>Entrar</Text>
              </Link>
            </View>

            <View style={styles.linhac}>
              <Text style={styles.linha}>Ainda Não tem Cadastro?</Text>
              <Text style={styles.cadastro} onPress={() => handlerPasso(2)}>
                Cadastre-se Agora!
              </Text>
            </View>
          </View>
        </ScrollView>
      )}

      {step === 2 && (
        <ScrollView>
          <Text style={styles.titulo2}>Insira Alguns Dados Básicos:</Text>
          <Text style={styles.texto}>Nome</Text>
          <TextInput
            placeholder="Insira seu Nome"
            style={styles.campo}
            onChangeText={(text) => setNome(text)}
            value={nome}
          />
          <Text style={styles.texto}>E-mail</Text>
          <TextInput
            placeholder="Insira seu endereço de E-mail"
            style={styles.campo}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Text style={styles.texto}>Senha</Text>
          <TextInput
            placeholder="Insira uma Senha"
            style={styles.campo}
            onChangeText={(text) => setSenha(text)}
            value={senha}
          />
          <Text style={styles.texto}>Repita Sua Senha</Text>
          <TextInput
            placeholder="Repita a Senha"
            style={styles.campo}
            onChangeText={(text) => setRsenha(text)}
            value={rsenha}
          />
          <TouchableOpacity
            onPress={() => handlerPasso(1)}
            style={styles.botaoav}
          >
            <Text style={styles.av1}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      <StatusBar style="auto" />

      <View style={styles.rodape}>
        <Text> </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  imagem: {
    width: 150,
    height: 200,
    marginTop: 10,
  },

  topo: {
    backgroundColor: "#F5EACF",
    width: 410,
    height: 190,
    borderRadius: 15,
    alignItems: "center",
    shadowRadius: 5,
    shadowColor: "black",
  },

  rodape: {
    backgroundColor: "#F5EACF",
    height: 30,
    width: "100%",
  },

  //página1

  titulo1: {
    fontSize: 25,
    margin: 10,
    padding: 40,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "black",
  },

  linhac: {
    flexDirection: "row",
  },

  linha: {
    marginLeft: 40,
  },

  cadastro: {
    paddingHorizontal: 5,
    color: "blue",
  },

  //pagina 2
  titulo2: {
    fontSize: 25,
    margin: 10,
    padding: 40,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "black",
  },
  texto: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    marginLeft: 20,
  },
  campo: {
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#F8F8F8",
    borderColor: "#e6e6e6",
    width: 330,
  },

  botaoav: {
    fontSize: 20,
    margin: 10,
    marginLeft: 30,
    backgroundColor: "#C9B8A6",
    width: "80%",
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },

  av1: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
});

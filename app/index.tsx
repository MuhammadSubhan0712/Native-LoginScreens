import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";

const Login = () => {
  // const [login, setLogin] = useState(null);

  const handleLogin = () => {
    console.log("User logged in successfully");
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>

      <SafeAreaView style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.email}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.password}
          placeholder="Enter Your Password"
          secureTextEntry={true}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.icons}>
        <Icon name="google" size={30} color="silver" style={styles.icon} />
        <Icon name="github" size={30} color="silver" style={styles.icon} />
        <Icon name="facebook" size={30} color="silver" style={styles.icon} />
      </View>

      <Link href={"/Register"} style={styles.createAccount}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#013220", // Black background for the app
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 128, 0, 0.5)", // Green shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginLeft: 12,
  },
  email: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 5, // 3D effect
  },
  password: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 5, // 3D effect
  },
  button: {
    backgroundColor: "#008B8B",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5, // 3D effect
  },
  buttonText: {
    color: "#00ff00",
    fontSize: 20,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  createAccount: {
    color: "#00FFFF",
    fontSize: 16,
  },
});

export default Login;

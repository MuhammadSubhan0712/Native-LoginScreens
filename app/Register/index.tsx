import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router"; // Corrected import for navigation

const Register = () => {
  const router = useRouter(); // Corrected the router for navigation

  const Registration = () => {
    console.log("User registered successfully");
    router.push("Login");
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Please Enter Your Account Details</Text>

      <SafeAreaView style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} placeholder="Enter Your First Name" />

        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Enter Your Last Name" />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry={true}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.button} onPress={Registration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Link href={"/"}>
        <TouchableOpacity style={styles.alreadyUser}>
          <Text style={styles.alreadyUserText}>Already a user? Sign in</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#013220", // Deep green background
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    elevation: 5, // 3D effect for inputs
  },
  button: {
    backgroundColor: "#008B8B",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5, // 3D effect for button
  },
  buttonText: {
    color: "#00FFFF",
    fontSize: 18,
  },
  alreadyUser: {
    marginTop: 10,
  },
  alreadyUserText: {
    color: "#00FFFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MainButton from "../Components/button";
import Title from "../Components/title";

export default function SignupUI({ onSignup, onChangeText, formData }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#f0961c",
          "#f2a339",
          "#f4b055",
          "#f6bd71",
          "#f7cb8e",
          "#f9d8aa",
          "#fbe5c6",
          "#fdf2e3",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />

      <Title style={styles.title} />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={FormData.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={FormData.username}
        />

        <TextInput
          style={styles.input}
          placeholder="Pet Name"
          value={FormData.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={FormData.email}
        />
      </View>

      <MainButton style={styles.button} title="Sign Up" onPress={onSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },

  formContainer: {
    alignItems: "center",
    padding: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  input: {
    width: "90%",
    padding: 10,
    marginVertical: 10,
    borderColor: "orange",
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  button: {
    marginHorizontal: 40,
  },
});

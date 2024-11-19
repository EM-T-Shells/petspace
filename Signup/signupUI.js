import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SignupUI({ onSignup, onChangeText, formData }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#de6d00", // Vibrant orange
          "#cb5a1b", // Soft orange
          "#b64925", // Light pastel orange
          "#9e3b2a",
          "#85302b",
          "#6c2629",
          "#521e24",
          "#38171d",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />

      <Text style={styles.title}>PetSpace</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={FormData.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={FormData.password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={FormData.email}
        />
      
        </View>

        <TouchableOpacity style={styles.button} onPress={onSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  formContainer: {
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderColor: "orange",
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  TouchableOpacity: {
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#de6d00",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 60,
  },
  buttonText: {
    color: "white",
  }
});

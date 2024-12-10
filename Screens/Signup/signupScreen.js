import { StyleSheet, TextInput, View, useWindowDimensions, Alert } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import MainButton from "../../Components/button";
import Title from "../../Components/title";

import { validateSignup } from "./signupLogic";

export default function SignupScreen({ onChangeText }) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height; 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);

    const result = await validateSignup({ firstName, lastName, email, password });

    Alert.alert(result.message);
    setLoading(false);
  };
  
  const dynamicStyles = {
    formContainer: {
      flexDirection: "column", // Retain vertical stacking
      alignItems: "center",
      padding: width * 0.04,
      marginTop: height * 0.05,
      marginBottom: height * 0.03,
    },
    input: {
      width: isLandscape ? "50%" : "90%", // Reduce width in landscape mode
      padding: isLandscape ? height * 0.03 : height * 0.02,
      marginVertical: height * 0.01,
      borderColor: "orange",
      borderWidth: 1.5,
      borderRadius: 10,
      backgroundColor: "white",
    },
    button: {
      marginHorizontal: isLandscape ? width * 0.3 : width * 0.2,
    },
  };

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

      <Title style={dynamicStyles.title} />

      <View style={dynamicStyles.formContainer}>
        <TextInput 
          style={dynamicStyles.input} 
          placeholder="First Name" 
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput 
          style={dynamicStyles.input} 
          placeholder="Last Name" 
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput 
          style={dynamicStyles.input} 
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={dynamicStyles.input} 
          placeholder="Password" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <MainButton 
        style={dynamicStyles.button} 
        title="Sign Up" 
        onPress={handleSignup}      
      />
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
});

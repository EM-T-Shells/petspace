import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/handlee.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={styles.title}>PetSpace</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 74,
    fontFamily: "CustomFont",
    color: "#ffffff",
  },
});

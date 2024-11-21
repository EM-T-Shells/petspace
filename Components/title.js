import React from "react";
import { Text, useWindowDimensions, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/handlee.ttf"),
  });

  const { width, height } = useWindowDimensions(); // Get current screen dimensions

  // Dynamic styles for responsiveness
  const dynamicStyles = {
    title: {
      textAlign: "center",
      fontSize: Math.min(width, height) * 0.15, // Dynamically scale font size
      fontFamily: "CustomFont",
      color: "#ffffff",
    },
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={dynamicStyles.title}>PetSpace</Text>
  );
}

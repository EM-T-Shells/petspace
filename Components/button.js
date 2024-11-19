import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const MainButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f0961c",
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



export default MainButton;

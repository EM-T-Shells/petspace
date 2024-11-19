import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signup() {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          '#FF8C00', // Vibrant orange
          '#FFA500', // Deep orange
          '#FFD580', // Soft orange
          '#FFE5B4', // Light pastel orange
          '#FFFFFF', // Subtle white highlight
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} 
        style={[styles.background, {height}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});

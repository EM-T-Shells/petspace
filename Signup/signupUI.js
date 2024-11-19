import { StyleSheet, Text, TextInput, View, useWindowDimensions, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupUI({onSignup, onChangeText, formData}) {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          // '#FF8C00', // Vibrant orange
          // '#FFA500', // Deep orange
          '#FFD580', // Soft orange
          '#FFE5B4', // Light pastel orange
          '#FFFFFF', // Subtle white highlight
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} 
        style={[styles.background, {height}]}
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={FormData.username}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={FormData.password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={FormData.email}
        />

        <Button title="Sign Up" onPress={onSignup} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Root container fills the entire screen
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Ensures the background covers the screen
  },
  formContainer: {
    alignItems: 'center',
    top: 400,
    padding: 20,
  },
  input: {
    height: 45,
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderColor: 'orange',
    borderWidth: 1.5,
    borderRadius: 10,
  },
});


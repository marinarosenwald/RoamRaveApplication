// components/Forms.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Forms = ({ navigation }) => {
  const openGoogleForm = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      <TouchableOpacity
        onPress={() => openGoogleForm('https://forms.gle/')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Suggest Your City</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => openGoogleForm('https://forms.gle/')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Review Our App</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 15,
    backgroundColor: '#6c757d',
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Forms;

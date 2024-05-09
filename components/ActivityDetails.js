// components/ActivityDetails.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActivityDetails = ({ route, navigation }) => {
  const { activity } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{activity.name}</Text>
      <Text style={styles.description}>Elliott’s Oyster House is a must-try place for those of you interested in locally sourced oysters. It is located on the water in Puget Sound and has a great photo area behind the restaurant where you can get photos with the Great Wheel and the water.</Text>
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  backButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActivityDetails;

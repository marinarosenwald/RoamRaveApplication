// components/Memories.js
import React from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const memories = [
  { id: 1, name: 'Elliott’s Oyster House', date: '8/4/23', entry: 'Tried some local oysters and crab...' },
  { id: 2, name: 'Seattle Art Museum', date: '8/7/23', entry: 'Visited the art museum and enjoyed the exhibits...' },
];

const MemoryRow = ({ item }) => (
  <View style={styles.row}>
    <Text style={styles.name}>{item.name} ({item.date})</Text>
    <Text style={styles.entry}>{item.entry}</Text>
  </View>
);

const Memories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={memories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MemoryRow item={item} />}
      />

      <Text style={styles.title}>Write Your Journal Entry Here</Text>
      <TextInput style={styles.input} placeholder="Title of your entry..." />
      <TextInput style={styles.input} placeholder="Write your journal entry..." />

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
    marginBottom: 10,
  },
  row: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  entry: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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

export default Memories;

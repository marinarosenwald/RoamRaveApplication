import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const Memories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={memories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MemoryRow item={item} />}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddMemory')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6', // Light blue background
  },
  row: {
    backgroundColor: '#FFC0CB', // Pink background for each memory
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Ensuring text is black for high contrast
  },
  entry: {
    fontSize: 16,
    color: 'black', // Ensuring text is black for readability
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Memories;

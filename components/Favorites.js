// components/Favorites.js
import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const favorites = [
  { id: 1, name: 'Elliott’s Oyster House' },
  { id: 2, name: 'Seattle Art Museum' },
  { id: 3, name: 'Pike Place Market' },
  { id: 4, name: 'Seattle Aquarium' },
];

const FavoriteRow = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.row}>
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

const Favorites = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate('ActivityDetails', { activity: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FavoriteRow item={item} onPress={handlePress} />}
      />
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

export default Favorites;

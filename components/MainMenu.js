// components/MainMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const suggestions = [
  { id: 1, name: 'Elliott’s Oyster House' },
  { id: 2, name: 'The Pink Door' },
  { id: 3, name: 'Seattle Art Museum' },
  { id: 4, name: 'Pike Place Market' },
  { id: 5, name: 'Seattle Aquarium' },
];

const MenuItem = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const MainMenu = ({ navigation }) => {
  const handleNavigate = (screen) => navigation.navigate(screen);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Downtown Seattle</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigate('ActivityDetails', { activity: item })} style={styles.suggestionItem}>
            <Text style={styles.suggestionText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <MenuItem title="Forms" onPress={() => handleNavigate('Forms')} />
      <MenuItem title="Favorites" onPress={() => handleNavigate('Favorites')} />
      <MenuItem title="Memories" onPress={() => handleNavigate('Memories')} />
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
  suggestionItem: {
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
  suggestionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainMenu;

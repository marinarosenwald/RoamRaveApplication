// MemoriesComponent.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const memories = [
  "ELLIOTT'S OYSTER HOUSE",
  'SEATTLE ART MUSEUM',
  'PIKE PLACE MARKET',
  'SEATTLE AQUARIUM',
  'THE PINK DOOR',
  'MT. JOY',
  'FORUM SOCIAL HOUSE',
  'BURGERMASTER',
  'WOODLAND PARK ZOO',
  'ALTITUDE SKY LOUNGE',
  
];

const MemoriesComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFC0CB" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MEMORIES</Text>
      </View>
      <ScrollView style={styles.memoriesList}>
        {memories.map((memory, index) => (
          <TouchableOpacity
            key={index}
            style={styles.memoryItem}
            onPress={() => {}}
          >
            <Text style={styles.memoryText}>{memory}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
  header: {
    backgroundColor: '#FFC0CB', 
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  memoriesList: {
    flex: 1,
  },
  memoryItem: {
    backgroundColor: '#FFF', 
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memoryText: {
    fontSize: 18,
    color: '#000', 
  },

});

export default MemoriesComponent;

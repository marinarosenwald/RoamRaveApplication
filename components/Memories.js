import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Memory from './Memory';

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const navigation = useNavigation();
  const skyBlue = '#76d6ff';
  const babyPink = '#ffbbe0';

  useEffect(() => {
    loadMemories();
  }, []);

  const loadMemories = async () => {
    try {
      const memoriesData = await AsyncStorage.getItem('MemoriesData');
      if (memoriesData) {
        const parsedMemories = JSON.parse(memoriesData).map(memory => new Memory(memory.id, memory.title, memory.summary, memory.photos));
        setMemories(parsedMemories);
      } else {
        const initialMemories = await loadMemoriesFromJSON();
        setMemories(initialMemories);
        saveMemoriesToAsyncStorage(initialMemories);
      }
    } catch (error) {
      console.error("Error loading memories:", error);
    }
  };

  const loadMemoriesFromJSON = async () => {
    try {
      const response = await fetch('path/to/MemoriesData.json'); // Replace with the correct path to your JSON file
      const data = await response.json();
      return data.map(memory => new Memory(memory.id, memory.title, memory.summary, memory.photos));
    } catch (error) {
      console.error("Error loading memories from JSON:", error);
      return [];
    }
  };

  const saveMemoriesToAsyncStorage = async (memories) => {
    try {
      await AsyncStorage.setItem('MemoriesData', JSON.stringify(memories));
    } catch (error) {
      console.error("Error saving memories:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../assets/NavIcon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>RoamRave</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Memories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddMemory')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/plus-math.png' }} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={memories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.memoryItem} 
            onPress={() => navigation.navigate('MemoryDetail', { memory: item })}
          >
            <Text style={styles.memoryTitle}>{item.title}</Text>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chevron-right.png' }} style={styles.chevronIcon} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76d6ff',
    paddingVertical: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  navTitle: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
  plusIcon: {
    width: 30,
    height: 30,
  },
  memoryItem: {
    backgroundColor: '#ffbbe0',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memoryTitle: {
    fontSize: 18,
  },
  chevronIcon: {
    width: 30,
    height: 30,
  },
  list: {
    paddingBottom: 20,
  },
});

export default Memories;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Memory from './Memory'; // Import Memory model

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
        const parsedMemories = JSON.parse(memoriesData);
        setMemories(parsedMemories);
      }
    } catch (error) {
      console.error("Error loading memories:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>
      <View style={styles.titleContainer}>
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

const skyBlue = '#76d6ff';
const babyPink = '#ffbbe0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: skyBlue,
    padding: 10,
    width: '100%',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  plusIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  memoryItem: {
    backgroundColor: babyPink,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  memoryTitle: {
    fontSize: 18,
    color: 'black',
  },
  chevronIcon: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  list: {
    paddingBottom: 20,
  },
});

export default Memories;

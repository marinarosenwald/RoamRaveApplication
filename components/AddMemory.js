import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Memory from './Memory'; // Import Memory model
import CustomImagePicker from './ImagePicker'; // Import Image Picker component

const AddMemory = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const navigation = useNavigation();
  const skyBlue = '#76d6ff';
  const babyPink = '#ffbbe0';

  const saveMemory = async () => {
    try {
      const memoriesData = await AsyncStorage.getItem('MemoriesData');
      let memories = memoriesData ? JSON.parse(memoriesData) : [];
      const newMemory = new Memory(Date.now().toString(), title, summary, selectedImages);
      memories.push(newMemory);
      await AsyncStorage.setItem('MemoriesData', JSON.stringify(memories));
      Alert.alert("Memory saved successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error saving memory:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Memory</Text>
        <TouchableOpacity onPress={saveMemory}>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/000000/bookmark-ribbon.png' }} style={styles.saveIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TextInput
          placeholder="Title of your entry..."
          value={title}
          onChangeText={setTitle}
          style={[styles.input, styles.titleInput]}
          multiline
        />
        <CustomImagePicker selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
        <TextInput
          placeholder="Write your journal entry here..."
          value={summary}
          onChangeText={setSummary}
          style={[styles.input, styles.summaryInput]}
          multiline
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76d6ff',
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  saveIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  contentContainer: {
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#ffbbe0',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  titleInput: {
    height: 50,
  },
  summaryInput: {
    height: 200,
  },
});

export default AddMemory;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
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
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Title of your entry..."
        value={title}
        onChangeText={setTitle}
        style={[styles.input, { height: 50 }]}
        multiline
      />
      <CustomImagePicker selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
      <TextInput
        placeholder="Write your journal entry here..."
        value={summary}
        onChangeText={setSummary}
        style={[styles.input, { height: 200 }]}
        multiline
      />
      <Button title="Save" onPress={saveMemory} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#ffbbe0',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
  },
});

export default AddMemory;

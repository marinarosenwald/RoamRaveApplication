import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Memory from './Memory'; // Import Memory model
import CustomImagePicker from './ImagePicker'; // Import Image Picker component

const AddMemory = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const navigation = useNavigation();

  const saveMemory = async () => {
    if (!title.trim() || !summary.trim() || selectedImages.length === 0) {
      Alert.alert("All fields are required", "Please add a title, summary, and at least one image.");
      return;
    }

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}></Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Memory</Text>
          <TouchableOpacity onPress={saveMemory}>
            <Image source={{ uri: 'https://img.icons8.com/ios/50/000000/bookmark-ribbon.png' }} style={styles.saveIcon} />
          </TouchableOpacity>
        </View>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76d6ff', // skyBlue color
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
  saveIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#ffbbe0', // babyPink color
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
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default AddMemory;

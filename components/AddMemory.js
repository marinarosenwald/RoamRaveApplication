import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddMemory = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelectFromLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, ...result.selected.map((image) => image.uri)]);
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const saveMemory = async () => {
    try {
      const memories = JSON.parse(await AsyncStorage.getItem('memories')) || [];
      const newMemory = {
        id: new Date().toISOString(),
        title,
        summary,
        photos: selectedImages,
      };
      const updatedMemories = [...memories, newMemory];
      await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving memory:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={saveMemory}>
          <Text style={styles.navButton}>Save</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Title of your entry..."
        placeholderTextColor="#666"
      />
      <TouchableOpacity style={styles.photoButton} onPress={handleSelectFromLibrary}>
        <Text style={styles.photoButtonText}>Select from Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
        <Text style={styles.photoButtonText}>Take a Photo</Text>
      </TouchableOpacity>
      <ScrollView horizontal>
        {selectedImages.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.photo} />
        ))}
      </ScrollView>
      <TextInput
        style={styles.entryInput}
        multiline
        value={summary}
        onChangeText={setSummary}
        placeholder="Write your journal entry here..."
        placeholderTextColor="#666"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  navButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  titleInput: {
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#E8E8E8',
  },
  photoButton: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  photoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  entryInput: {
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    height: 200,
    textAlignVertical: 'top',
    backgroundColor: '#E8E8E8',
  },
});

export default AddMemory;

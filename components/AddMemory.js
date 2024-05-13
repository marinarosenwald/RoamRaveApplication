import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const AddMemory = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  
  const handleSave = () => {
    // Logic to save the memory
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navButton}>⟨ Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.navButton}>✔</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder="Title of your entry..."
        placeholderTextColor="#666"
      />
      <TouchableOpacity style={styles.photoButton}>
        <Text style={styles.photoButtonText}>Add Photos</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.entryInput}
        multiline
        value={entry}
        onChangeText={setEntry}
        placeholder="Write your journal entry here..."
        placeholderTextColor="#666"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF', // Light cyan background as a placeholder
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
    color: '#000080', // Navy blue as a placeholder
  },
  titleInput: {
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#FFB6C1', // Light pink as a placeholder for title input
  },
  photoButton: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#87CEEB', // Sky blue as a placeholder for button
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  photoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: '#FFB6C1', // Light pink as a placeholder for journal entry input
  },
});

export default AddMemory;

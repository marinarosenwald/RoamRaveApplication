import React, { useEffect } from 'react';
import { View, Button, Image, StyleSheet, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CustomImagePicker = ({ selectedImages, setSelectedImages }) => {
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera and photo library permissions to make this work!');
      }
    })();
  }, []);

  const pickImages = async () => {
    if (selectedImages.length >= 10) {
      Alert.alert('Limit Reached', 'You can only select up to 10 images.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Enable multiple selection
      quality: 1,
    });

    if (!result.cancelled && result.assets) {
      console.log('Selected images:', result.assets);
      const newImages = result.assets.map(asset => asset.uri);
      const totalImages = [...selectedImages, ...newImages];
      if (totalImages.length > 10) {
        Alert.alert('Limit Reached', 'You can only select up to 10 images.');
        setSelectedImages(totalImages.slice(0, 10));
      } else {
        setSelectedImages(totalImages);
      }
    }
  };

  const takePhoto = async () => {
    if (selectedImages.length >= 10) {
      Alert.alert('Limit Reached', 'You can only select up to 10 images.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.cancelled) {
      console.log('Photo taken:', result.uri);
      const totalImages = [...selectedImages, result.uri];
      if (totalImages.length > 10) {
        Alert.alert('Limit Reached', 'You can only select up to 10 images.');
        setSelectedImages(totalImages.slice(0, 10));
      } else {
        setSelectedImages(totalImages);
      }
    }
  };

  useEffect(() => {
    console.log('Selected Images:', selectedImages);
  }, [selectedImages]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.imageContainer}>
        {selectedImages.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={pickImages}>
        <Text style={styles.buttonText}>Pick images from gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take a photo</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#76d6ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    
    fontSize: 16,
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default CustomImagePicker;

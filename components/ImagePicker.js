import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
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

    if (!result.cancelled) {
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

  const removeImage = (uri) => {
    const filteredImages = selectedImages.filter(imageUri => imageUri !== uri);
    setSelectedImages(filteredImages);
  };

  useEffect(() => {
    console.log('Selected Images:', selectedImages);
  }, [selectedImages]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImages}>
        <Text style={styles.buttonText}>Pick images from gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Take a photo</Text>
      </TouchableOpacity>
      <ScrollView horizontal style={styles.imageContainer}>
        {selectedImages.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity style={styles.removeButton} onPress={() => removeImage(uri)}>
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center', // Align buttons in the center
  },
  button: {
    backgroundColor: '#76d6ff', // skyBlue color
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',


    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
  },
  imageContainer: {
    marginTop: 10,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomImagePicker;

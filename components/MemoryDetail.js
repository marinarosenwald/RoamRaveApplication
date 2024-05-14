import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MemoryDetail = ({ route }) => {
  const { memory } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{memory.title}</Text>
      <Text style={styles.summary}>{memory.summary}</Text>
      {memory.photos.map((photo, index) => (
        <Image key={index} source={{ uri: photo }} style={styles.photo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    marginBottom: 20,
  },
  photo: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default MemoryDetail;

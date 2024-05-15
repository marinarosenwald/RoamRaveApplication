import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const MemoryDetail = ({ route }) => {
  const { memory } = route.params;
  const skyBlue = '#76d6ff';
  const Pink = '#ffbbe0';

  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <Text style={styles.title}>{memory.title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.imageContainer}>
          {memory.photos.map((photoURLString, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image
                source={{ uri: photoURLString }}
                style={styles.image}
                onError={() => {
                  this.setState({
                    brokenImage: true
                  });
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>{memory.summary}</Text>
      </View>
      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  spacer: {
    height: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  scrollView: {
    marginBottom: 15,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  summaryContainer: {
    backgroundColor: '#ffbbe0',
    padding: 15,
    borderRadius: 10,
  },
  summary: {
    fontSize: 16,
    color: 'black',
  },
});

export default MemoryDetail;

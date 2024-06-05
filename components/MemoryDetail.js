import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const MemoryDetail = ({ route }) => {
  const { memory } = route.params;
  const navigation = useNavigation();
  const [textInputHeight, setTextInputHeight] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Memories</Text>
        <View style={styles.headerPlaceholder} />
      </View>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{memory.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          {memory.photos.map((photoURLString, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image
                source={{ uri: photoURLString }}
                style={styles.image}
                onError={() => {
                  console.log('Failed to load image at:', photoURLString);
                }}
              />
            </View>
          ))}
        </View>
        <View style={styles.summaryContainer}>
          <TextInput
            value={memory.summary}
            style={[styles.summary, { height: textInputHeight }]}
            editable={false}
            multiline
            onContentSizeChange={(e) =>
              setTextInputHeight(e.nativeEvent.contentSize.height)
            }
            scrollEnabled={false} // Disable internal scrolling
          />
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    backgroundColor: skyBlue,
    padding: 10,
    width: '100%',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  headerPlaceholder: {
    width: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Align items to the left
  },
  imageWrapper: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eaeaea',
    width: (width / 2) - 20, // Adjusted width to fit two images per row with margin
    height: (width / 2) - 20, // Adjusted height to fit two images per row
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  summaryContainer: {
    backgroundColor: babyPink,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start'
  },
  summary: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default MemoryDetail;

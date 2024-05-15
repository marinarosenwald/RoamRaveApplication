import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ActivitiesViewModel from './ActivitiesViewModel'; // Make sure this is the correct path

const Favorites = () => {
  const [activities, setActivities] = useState([]);
  const navigation = useNavigation();
  const skyBlue = '#76d6ff';
  const babyPink = '#ffbbe0';

  useEffect(() => {
    loadActivitiesData();
  }, []);

  const loadActivitiesData = async () => {
    try {
      const activitiesData = await AsyncStorage.getItem('ActivitiesData');
      if (activitiesData) {
        const parsedActivities = JSON.parse(activitiesData);
        setActivities(parsedActivities.filter(activity => activity.isFavorite));
      }
    } catch (error) {
      console.error("Error loading activities:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Favorites</Text>
        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff0000/like.png' }} style={styles.heartIcon} />
        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff0000/like.png' }} style={styles.heartIcon} />
      </View>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.activityItem} 
            onPress={() => navigation.navigate('ActivityDetails', { activity: item })}
          >
            <Text style={styles.activityTitle}>{item.name}</Text>
            <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chevron-right.png' }} style={styles.chevronIcon} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
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
    paddingLeft: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  heartIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  activityItem: {
    backgroundColor: '#ffbbe0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  activityTitle: {
    fontSize: 18,
    color: 'black',
  },
  chevronIcon: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  list: {
    paddingBottom: 20,
  },
});

export default Favorites;

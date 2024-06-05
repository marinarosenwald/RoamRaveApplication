import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Favorites = () => {
  const [activities, setActivities] = useState([]);
  const navigation = useNavigation();
  const skyBlue = '#76d6ff';
  const babyPink = '#ffbbe0';

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

  useEffect(() => {
    loadActivitiesData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadActivitiesData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Favorites</Text>
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
    backgroundColor: skyBlue,
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
  heartIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  activityItem: {
    backgroundColor: babyPink,
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

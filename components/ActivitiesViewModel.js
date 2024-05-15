import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the Activities model class (assuming you have one)
class Activities {
  constructor(id, name, state, city, description, category, isFavorite, coordinates) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.city = city;
    this.description = description;
    this.category = category;
    this.isFavorite = isFavorite;
    this.coordinates = coordinates;
  }
}

// Custom hook to manage activities state
const useActivitiesViewModel = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivitiesData();
  }, []);

  const loadActivitiesData = async () => {
    try {
      const activitiesData = await AsyncStorage.getItem('ActivitiesData');
      if (activitiesData) {
        const parsedActivities = JSON.parse(activitiesData).map(activity =>
          new Activities(
            activity.id,
            activity.name,
            activity.state,
            activity.city,
            activity.description,
            activity.category,
            activity.isFavorite,
            activity.coordinates
          )
        );
        setActivities(parsedActivities);
        console.log(`Loaded ${parsedActivities.length} activities`);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const toggleFavorite = async (activity) => {
    const updatedActivities = activities.map(item =>
      item.id === activity.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setActivities(updatedActivities);
    saveActivitiesData(updatedActivities);
  };

  const saveActivitiesData = async (updatedActivities) => {
    try {
      const updatedData = JSON.stringify(updatedActivities);
      await AsyncStorage.setItem('ActivitiesData', updatedData);
      console.log('Updated data saved to ActivitiesData.json');
    } catch (error) {
      console.error('Error saving updated data:', error);
    }
  };

  return { activities, toggleFavorite };
};

export default useActivitiesViewModel;

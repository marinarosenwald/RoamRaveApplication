import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import activitiesData from './components/ActivitiesData.json'; // Assuming you have a JSON file with initial data

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivitiesData();
  }, []);

  const loadActivitiesData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('ActivitiesData');
      if (jsonValue != null) {
        setActivities(JSON.parse(jsonValue));
        console.log(`Loaded ${JSON.parse(jsonValue).length} activities`);
      } else {
        setActivities(activitiesData);
      }
    } catch (e) {
      console.error('Error loading data:', e);
    }
  };

  const saveActivitiesData = async () => {
    try {
      const jsonValue = JSON.stringify(activities);
      await AsyncStorage.setItem('ActivitiesData', jsonValue);
      console.log("Updated data saved to 'ActivitiesData.json'");
    } catch (e) {
      console.error('Error saving updated data:', e);
    }
  };

  const toggleFavorite = (activity) => {
    const updatedActivities = activities.map((item) =>
      item.id === activity.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setActivities(updatedActivities);
    saveActivitiesData();
  };

  return (
    <ActivitiesContext.Provider value={{ activities, toggleFavorite }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesContext;

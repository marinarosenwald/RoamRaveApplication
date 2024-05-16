// ActivitiesContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        loadActivities();
    }, []);

    const loadActivities = async () => {
        try {
            const data = require('./components/ActivitiesData.json');
            setActivities(data);
        } catch (error) {
            console.error('Error loading activities:', error);
        }
    };

    const toggleFavorite = async (activity) => {
        const updatedActivities = activities.map((item) =>
            item.id === activity.id ? { ...item, isFavorite: !item.isFavorite } : item
        );
        setActivities(updatedActivities);
        await AsyncStorage.setItem('ActivitiesData', JSON.stringify(updatedActivities));
    };

    return (
        <ActivitiesContext.Provider value={{ activities, toggleFavorite }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContext;

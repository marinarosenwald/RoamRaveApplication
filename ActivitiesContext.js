import React, { createContext, useState } from 'react';
import activitiesData from './components/ActivitiesData.json'; // Ensure you have this file

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState(activitiesData);

    const toggleFavorite = (activity) => {
        setActivities((prevActivities) =>
            prevActivities.map((item) =>
                item.id === activity.id ? { ...item, isFavorite: !item.isFavorite } : item
            )
        );
    };

    return (
        <ActivitiesContext.Provider value={{ activities, toggleFavorite }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContext;

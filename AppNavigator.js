import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './components/MainMenu';
import Forms from './components/Forms';
import Favorites from './components/Favorites';
import Memories from './components/Memories';
import ActivityList from './components/ActivityList';
import ActivityDetails from './components/ActivityDetails';
import AddMemory from './components/AddMemory';
import MemoryDetail from './components/MemoryDetail';  // Ensure this import is correct

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Main Menu' }} />
        <Stack.Screen name="Forms" component={Forms} options={{ title: 'Forms' }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favorites' }} />
        <Stack.Screen name="Memories" component={Memories} options={{ title: 'Memories' }} />
        <Stack.Screen name="ActivityList" component={ActivityList} options={{ title: 'Activities' }} />
        <Stack.Screen name="ActivityDetails" component={ActivityDetails} options={{ title: 'Activity Details' }} />
        <Stack.Screen name="AddMemory" component={AddMemory} options={{ title: 'Add Memory' }} />
        <Stack.Screen name="MemoryDetail" component={MemoryDetail} options={{ title: 'Memory Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './components/Menu';
import ContentView from './components/ContentView';
import ActivityDetails from './components/ActivityDetails';
import FormsView from './components/FormsView';
import Favorites from './components/Favorites';
import Memories from './components/Memories';
import AddMemory from './components/AddMemory';
import ActivityList from './components/ActivityList';
import MemoryDetail from './components/MemoryDetail';
import { ActivitiesProvider } from './ActivitiesContext';

const Stack = createStackNavigator();

const RoamRaveApp = () => {
  return (
    <ActivitiesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
          <Stack.Screen name="ContentView" component={ContentView} />
          <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
          <Stack.Screen name="FormsView" component={FormsView} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Memories" component={Memories} />
          <Stack.Screen name="AddMemory" component={AddMemory} />
          <Stack.Screen name="ActivityList" component={ActivityList} />
          <Stack.Screen name="MemoryDetail" component={MemoryDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActivitiesProvider>
  );
};

export default RoamRaveApp;

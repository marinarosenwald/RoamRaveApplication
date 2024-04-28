import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentView from './components/ContentView';
import FormsView from './components/FormsView';
import MapViewComponent from './components/MapViewComponent';
import Menu from './components/Menu';
import MemoriesComponent from './components/MemoriesComponent';
import styles from './styles';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ContentView} 
          options={{ title: 'RoamRave' }}
        />
        <Stack.Screen
          name="Memories"
          component={MemoriesComponent}
          options={{ title: 'Memories' }} 
        />
        <Stack.Screen name="Form" component={FormsView} options={{ title: 'Form' }} />
        <Stack.Screen name="Map" component={MapViewComponent} options={{ title: 'Map' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

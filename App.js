import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentView from './components/ContentView';
import FormsView from './components/FormsView';
import MapViewComponent from './components/MapViewComponent';
import Menu from './components/Menu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ContentView} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Form" component={FormsView} options={{ title: 'Fill Form' }} />
        <Stack.Screen name="Map" component={MapViewComponent} options={{ title: 'View Map' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

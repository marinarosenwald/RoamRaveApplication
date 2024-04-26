import React from 'react';
import MapView from 'react-native-maps';
import { View, Button } from 'react-native';
import styles from '../styles';

const MapViewComponent = ({ navigation }) => (
  <View style={styles.flexContainer}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 47.6062,
        longitude: -122.3321,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

export default MapViewComponent;

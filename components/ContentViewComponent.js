import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import styles from '../styles';

const ContentViewComponent = () => {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.header}>Downtown Seattle</Text>
      <MapView
        style={styles.map}
        region={{
          latitude: 47.6062,
          longitude: -122.3321,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </View>
  );
};

export default ContentViewComponent;

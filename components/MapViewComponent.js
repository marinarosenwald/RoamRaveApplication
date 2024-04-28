import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import styles from '../styles'; // Make sure the path to your styles file is correct

const places = [
  'ELLIOTT’S OYSTER HOUSE',
  'SEATTLE ART MUSEUM',
  'PIKE PLACE MARKET',
  'SEATTLE AQUARIUM',
  'THE PINK DOOR'
  // Add more places as needed
];

const MapViewComponent = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuIconContainer} onPress={() => navigation.toggleDrawer()}>
        {/* Replace with your menu icon */}
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>DOWNTOWN SEATTLE</Text>
    </View>
    <MapView
      style={styles.map}
      // Other MapView properties
    />
    <ScrollView style={styles.placesContainer}>
      {places.map((place, index) => (
        <Text key={index} style={styles.placeItem}>{place}</Text>
      ))}
    </ScrollView>
  </View>
);

export default MapViewComponent;

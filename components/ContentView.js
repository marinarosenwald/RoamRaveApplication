import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const ContentView = ({ navigation }) => (
  <View style={styles.contentContainer}>
    <Text style={styles.text}>Welcome to RoamRave!</Text>
    <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
    <Button title="View Map" onPress={() => navigation.navigate('Map')} />
    <Button title="Open Menu" onPress={() => navigation.navigate('Menu')} />
  </View>
);

export default ContentView;

import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles';

const Menu = ({ navigation }) => (
  <View style={styles.menuContainer}>
    <Text style={styles.text}>Menu Options</Text>
    <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
    <Button title="View Map" onPress={() => navigation.navigate('Map')} />
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

export default Menu;

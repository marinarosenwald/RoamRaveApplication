// Menu.js
import React from 'react';
import { View, Button, Text, Image } from 'react-native';
import styles from '../styles';
import VertNavIcon from '../assets/VertNavIcon.png'; 

const Menu = ({ navigation }) => (
  <View style={styles.menuContainer}>
    <Image source={VertNavIcon} style={styles.icon} />
    <Text style={styles.text}>Menu Options</Text>
    <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
    <Button title="View Map" onPress={() => navigation.navigate('Map')} />
    <Button title="Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

export default Menu;

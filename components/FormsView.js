// FormsView.js
import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native';



import styles from '../styles'; 

const FormsView = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [review, setReview] = useState('');

  // Define your submit functions here

  return (
    <SafeAreaView style={styles.formScreenContainer}>
      <StatusBar backgroundColor="#FFC0CB" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.formHeaderContainer}>
          <Image source={require('../assets/NavIcon.png')} style={styles.menuIcon} />
          <Text style={styles.formHeaderText}>FORMS</Text>
        </View>
        <TouchableOpacity style={styles.formButton} onPress={() => {/* Your code here */}}>
          <Text style={styles.formButtonTitle}>SUGGEST YOUR CITY</Text>
          <Text style={styles.formButtonDescription}>
            Fill out the form above with information about your favorite places in your city and our travel experts will review your suggestions!!!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formButton} onPress={() => {/* Your code here */}}>
          <Text style={styles.formButtonTitle}>REVIEW OUR APP</Text>
          <Text style={styles.formButtonDescription}>
            Fill out the form above with your thoughts on this app. Include your like, dislikes, if anything seems broken, or anything else you want to share with our development team!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormsView;

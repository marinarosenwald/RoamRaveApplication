// ContentView.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const ContentView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ADD8E6" barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={require('../assets/VertNavIcon.png')} style={styles.menuIcon} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.selectedButton]} onPress={() => navigation.navigate('Downtown')}>
          <Text style={styles.buttonText}>DOWNTOWN SEATTLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Suggestions')}>
          <Text style={styles.buttonText}>SUGGESTIONS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Forms')}>
          <Text style={styles.buttonText}>FORMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Favorites')}>
          <Text style={styles.buttonText}>FAVORITES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Memories')}>
          <Text style={styles.buttonText}>MEMORIES</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 60, 
    backgroundColor: '#ADD8E6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  menuIcon: {
    width: 50, 
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FFC0CB',
  },
  buttonText: {
    color: '#00008B',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContentView;

import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ActivitiesContext from '../ActivitiesContext';
import ActivitiesRow from './ActivitiesRow';
import MapView, { Marker } from 'react-native-maps';

const ContentView = () => {
  const { activities } = useContext(ActivitiesContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { city, lat, long } = route.params;
  const skyBlue = '#76d6ff';
  const babyPink = '#ffbbe0';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city}</Text>
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: lat, longitude: long }} />
      </MapView>
      <FlatList
        data={activities.filter(activity => activity.city === city)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ActivityDetails', { activity: item })}>
            <ActivitiesRow activity={item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
      <View style={styles.navigationHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../assets/NavIcon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>RoamRave</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 20,
  },
  map: {
    height: 350,
    marginBottom: 20,
  },
  list: {
    backgroundColor: '#76d6ff',
    padding: 10,
    borderRadius: 10,
  },
  navigationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  navIcon: {
    width: 80,
    height: 80,
  },
  headerTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ContentView;

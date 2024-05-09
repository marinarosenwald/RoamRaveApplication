// components/ActivityList.js
import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import activities from './ActivitiesData.json';

const ActivityRow = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.row}>
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

const ActivityList = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate('ActivityDetails', { activity: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActivityRow item={item} onPress={handlePress} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  row: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ActivityList;

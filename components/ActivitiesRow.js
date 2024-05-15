import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivitiesRow = ({ activity }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{activity.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
});

export default ActivitiesRow;

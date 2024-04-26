import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
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
    </SafeAreaView>
  );
};

export default App;

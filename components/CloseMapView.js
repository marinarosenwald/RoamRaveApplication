import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CloseMapView = ({ coordinate }) => {
    const region = {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region}>
                <Marker coordinate={coordinate} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default CloseMapView;

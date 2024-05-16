import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const CloseMapView = ({ coordinate }) => {
    return (
        <MapView
            style={{ height: 200, marginVertical: 10 }}
            initialRegion={{
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker coordinate={coordinate} />
        </MapView>
    );
};

export default CloseMapView;

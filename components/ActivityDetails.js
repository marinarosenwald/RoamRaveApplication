import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivitiesContext from '../ActivitiesContext';

const ActivityDetails = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { activity } = route.params;
    const { toggleFavorite } = useContext(ActivitiesContext);
    const [isFavorite, setIsFavorite] = useState(activity.isFavorite);

    const handleToggleFavorite = () => {
        toggleFavorite(activity);
        setIsFavorite(!isFavorite);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}></Text>
            </View>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{activity.name}</Text>
                <TouchableOpacity onPress={handleToggleFavorite}>
                    <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={30} color={isFavorite ? "red" : "black"} />
                </TouchableOpacity>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: activity.coordinates.latitude,
                    longitude: activity.coordinates.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={activity.coordinates} />
            </MapView>
            <View style={styles.detailsContainer}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.category}>{activity.category.toUpperCase()}</Text>
                </View>
                <Text style={styles.description}>{activity.description.toUpperCase()}</Text>
            </View>
        </View>
    );
};

const skyBlue = '#76d6ff';
const babyPink = '#ffbbe0';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: skyBlue,
        padding: 10,
        width: '100%',
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    map: {
        height: 200,
        marginVertical: 10,
    },
    detailsContainer: {
        padding: 10,
    },
    categoryContainer: {
        backgroundColor: babyPink,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    category: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        backgroundColor: babyPink,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ActivityDetails;

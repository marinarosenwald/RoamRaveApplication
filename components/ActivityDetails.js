import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CloseMapView from './CloseMapView';
import ActivitiesContext from '../ActivitiesContext';

const ActivityDetails = () => {
    const route = useRoute();
    const { activity } = route.params;
    const { toggleFavorite } = useContext(ActivitiesContext);
    const [isFavorite, setIsFavorite] = useState(activity.isFavorite);

    const skyBlue = '#76d6ff';
    const babyPink = '#ffbbe0';

    const handleToggleFavorite = () => {
        toggleFavorite(activity);
        setIsFavorite(!isFavorite);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.title}>{activity.name}</Text>
                    <Text style={styles.subtitle}>{activity.city}</Text>
                </View>
                <TouchableOpacity onPress={handleToggleFavorite}>
                    <Image
                        source={isFavorite ? require('../assets/FilledHeart.png') : require('../assets/EmptyHeart.png')}
                        style={styles.heartIcon}
                    />
                </TouchableOpacity>
            </View>
            <CloseMapView coordinate={activity.locationCoordinate} />
            <View style={styles.detailsContainer}>
                <View style={[styles.categoryContainer, { backgroundColor: '#ffbbe0' }]}>
                    <Text style={styles.category}>{activity.category}</Text>
                </View>
                <Text style={[styles.description, { backgroundColor:  '#ffbbe0' }]}>{activity.description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
    heartIcon: {
        width: 30,
        height: 30,
    },
    detailsContainer: {
        padding: 10,
    },
    categoryContainer: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    category: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
    },
});

export default ActivityDetails;

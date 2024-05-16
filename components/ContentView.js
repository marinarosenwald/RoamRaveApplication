import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

const ContentView = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { city, lat, long } = route.params;

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        loadActivities();
    }, []);

    const loadActivities = () => {
        // Load activities data from a local JSON file
        try {
            const data = require('./ActivitiesData.json');
            setActivities(data);
        } catch (error) {
            console.error('Error loading activities:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>RoamRave</Text>
            </View>
            <Text style={styles.cityTitle}>{city}</Text>
            <MapView
                style={styles.map}
                region={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ latitude: lat, longitude: long }} />
            </MapView>
            <FlatList
                data={activities.filter(activity => activity.city === city)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.activityItem}
                        onPress={() => navigation.navigate('ActivityDetails', { activity: item })}
                    >
                        <Text style={styles.activityTitle}>{item.name}</Text>
                        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chevron-right.png' }} style={styles.chevronIcon} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.list}
            />
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
        justifyContent: 'center',
        backgroundColor: skyBlue,
        padding: 10,
        width: '100%',
        position: 'relative',
    },
    menuIcon: {
        width: 30,
        height: 30,
      //  position: 'absolute',
        left: -100,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },
    cityTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 20,
    },
    map: {
        height: 350,
        marginVertical: 20,
    },
    activityItem: {
        backgroundColor: skyBlue,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 20,
    },
    activityTitle: {
        fontSize: 18,
        color: 'black',
    },
    chevronIcon: {
        width: 20,
        height: 20,
        tintColor: 'black',
    },
    list: {
        paddingBottom: 20,
    },
});

export default ContentView;

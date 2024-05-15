import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    const [selectedCity, setSelectedCity] = useState('Downtown Seattle');

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../assets/VertNavIcon.png')} style={styles.navIcon} />
                </TouchableOpacity>
                <Text style={styles.navTitle}>RoamRave</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedCity(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Downtown Seattle" value="Downtown Seattle" />
                    <Picker.Item label="Bellevue" value="Bellevue" />
                    <Picker.Item label="Redmond" value="Redmond" />
                </Picker>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Suggestions', { city: selectedCity })} style={styles.button}>
                <Text style={styles.buttonText}>Suggestions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FormsView')} style={styles.button}>
                <Text style={styles.buttonText}>Forms</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.button}>
                <Text style={styles.buttonText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Memories')} style={styles.button}>
                <Text style={styles.buttonText}>Memories</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    navBar: {
        width: '100%',
        height: 100,
        backgroundColor: '#76d6ff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    navTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
        textAlign: 'center',
        marginRight: 50,
    },
    pickerContainer: {
        width: 300,
        backgroundColor: '#ffbbe0',
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: '100%',
        height: 50,
        color: '#000',
    },
    button: {
        width: 300,
        height: 70,
        backgroundColor: '#76d6ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Menu;

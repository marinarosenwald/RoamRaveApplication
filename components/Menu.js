import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    const [selectedCity, setSelectedCity] = useState('Downtown Seattle');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>RoamRave</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedCity(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#000" // Changes the dropdown arrow color
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
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#76d6ff', // skyBlue color
        padding: 10,
        width: '100%',
        position: 'relative',
    },
    menuIcon: {
        width: 30,
        height: 30,      
        left: -100,        
        transform: [{ rotate: '90deg' }],
    },

    
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
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
        backgroundColor: 'transparent', // Makes the picker background transparent
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

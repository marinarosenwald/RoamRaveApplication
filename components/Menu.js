import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();
    const [selectedCity, setSelectedCity] = useState('Downtown Seattle');
    const [modalVisible, setModalVisible] = useState(false);
    const cities = ['Downtown Seattle', 'Bellevue', 'Redmond'];
    const skyBlue = '#76d6ff';
    const babyPink = '#ffbbe0';

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>RoamRave</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerContainer}>
                <Text style={styles.pickerText}>{selectedCity}</Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={cities}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => handleCitySelect(item)}
                                >
                                    <Text style={styles.modalItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => navigation.navigate('ContentView', { city: selectedCity })} style={styles.button}>
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

const skyBlue = '#76d6ff';
const babyPink = '#ffbbe0';

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
        transform: [{ rotate: '90deg' }],
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },
    pickerContainer: {
        width: 300,
        height: 70,
        backgroundColor: babyPink,
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    picker: {
        width: '100%',
        height: 50,
        color: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0, // Hide the default picker, we use the text to display the value
    },
    button: {
        width: 300,
        height: 70,
        backgroundColor: skyBlue,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalItemText: {
        fontSize: 18,
        color: 'black',
    },
});

export default Menu;

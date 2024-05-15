import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FormsView = () => {
  const navigation = useNavigation();
  const skyBlue = '#76d6ff';
  const Pink = '#ffbbe0';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Forms</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.spacer} />
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={[styles.linkContainer, { backgroundColor: '#76d6ff' }]}
            onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfef7lCeuM_tIP24sY9Hw2oLF-35ELGNfP9BORXrafSGBMuqg/viewform?usp=sf_link")}
          >
            <Text style={styles.linkText}>Suggest Your City</Text>
          </TouchableOpacity>
          <View style={[styles.textContainer, { backgroundColor: Pink }]}>
            <Text style={styles.text}>
              Fill out the form above with information about your favorite places in your city and our travel experts will review your suggestions!!!
            </Text>
          </View>
        </View>
        <View style={styles.spacerLarge} />
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={[styles.linkContainer, { backgroundColor: '#76d6ff' }]}
            onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfxP0GzA1x7GnxBsIIL8p7QwmpWlYkxxJSlmTNiumEAlGRHZg/viewform?usp=sf_link")}
          >
            <Text style={styles.linkText}>Review Our App</Text>
          </TouchableOpacity>
          <View style={[styles.textContainer, { backgroundColor:  '#ffbbe0' }]}>
            <Text style={styles.text}>
              Fill out the form above with your thoughts on this App. include your like, dislikes, if anything seems broken, or anything else you want to share with our development team!
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#76d6ff',
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  spacer: {
    height: 25,
  },
  spacerLarge: {
    height: 50,
  },
  innerContainer: {
    marginBottom: 20,
  },
  linkContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  linkText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  navIcon: {
    width: 80,
    height: 80,
    marginLeft: -10,
  },
  navTitle: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default FormsView;

import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FormsView = () => {
  const navigation = useNavigation();
  const skyBlue = '#76d6ff';
  const babyPink = '#ffbbe0';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/ff00ff/menu--v1.png' }} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forms</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.spacer} />
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={[styles.linkContainer, { backgroundColor: skyBlue }]}
            onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfef7lCeuM_tIP24sY9Hw2oLF-35ELGNfP9BORXrafSGBMuqg/viewform?usp=sf_link")}
          >
            <Text style={styles.linkText}>Suggest Your City</Text>
          </TouchableOpacity>
          <View style={[styles.textContainer, { backgroundColor: babyPink }]}>
            <Text style={styles.text}>
              Fill out the form above with information about your favorite places in your city and our travel experts will review your suggestions!!!
            </Text>
          </View>
        </View>
        <View style={styles.spacerLarge} />
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={[styles.linkContainer, { backgroundColor: skyBlue }]}
            onPress={() => Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfxP0GzA1x7GnxBsIIL8p7QwmpWlYkxxJSlmTNiumEAlGRHZg/viewform?usp=sf_link")}
          >
            <Text style={styles.linkText}>Review Our App</Text>
          </TouchableOpacity>
          <View style={[styles.textContainer, { backgroundColor: babyPink }]}>
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
    backgroundColor: '#76d6ff', // skyBlue color
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
    justifyContent: 'center',
    paddingVertical: 2, // Reduce vertical padding
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  spacer: {
    height: -3, // Further reduced height
  },
  spacerLarge: {
    height: 0.2,
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
});

export default FormsView;

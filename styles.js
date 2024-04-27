// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    borderWidth: 8,
    borderColor: '#0000FF', // Deep blue border color
    borderRadius: 25,
    margin: 10,
    marginTop: 50,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    margin: 20,
  },
  button: {
    backgroundColor: '#ADD8E6', // Light blue for unselected buttons
    paddingVertical: 20,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  selectedButton: {
    backgroundColor: '#FFC0CB', // Pink color for selected button
  },
  buttonText: {
    color: '#00008B', // Dark blue text color
    fontSize: 20,
    fontWeight: 'bold',
  },
});

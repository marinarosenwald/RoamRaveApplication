import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff', // You can adjust the background color as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  map: {
    width: '100%',
    height: 300, // Set the height or make it flexible as per your design
  },
});

// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    formScreenContainer: {
        flex: 1,
        backgroundColor: '#FFF', 
      },
      formHeaderContainer: {
        backgroundColor: '#ADD8E6', 
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
      },
      formHeaderText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000', 
        marginLeft: 16,
      },
      formButton: {
        backgroundColor: '#ADD8E6', 
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      formButtonTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF', 
      },
      formButtonDescription: {
        fontSize: 16,
        color: '#FFFFFF', 
        marginTop: 10,
        textAlign: 'center',
      },
      menuIcon: {
        width: 30,
        height: 30, 
        resizeMode: 'contain',
      },
  screenContainer: {
    flex: 1,
    borderWidth: 8,
    borderColor: '#0000FF', 
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

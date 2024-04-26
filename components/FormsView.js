import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '../styles';

const FormsView = ({ navigation }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    alert(`Form submitted with: ${input}`);
    setInput(''); // Clear input after submit
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Enter something..."
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default FormsView;

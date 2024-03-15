import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, title, color }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handlePress = (value) => {
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.row}>
        <Button title="7" onPress={() => handlePress('7')} color="#FFFFFF" />
        <Button title="8" onPress={() => handlePress('8')} color="#FFFFFF" />
        <Button title="9" onPress={() => handlePress('9')} color="#FFFFFF" />
        <Button title="/" onPress={() => handlePress('/')} color="#808080" />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handlePress('4')} color="#FFFFFF" />
        <Button title="5" onPress={() => handlePress('5')} color="#FFFFFF" />
        <Button title="6" onPress={() => handlePress('6')} color="#FFFFFF" />
        <Button title="*" onPress={() => handlePress('*')} color="#808080" />
      </View>
      <View style={styles.row}>
        <Button title="1" onPress={() => handlePress('1')} color="#FFFFFF" />
        <Button title="2" onPress={() => handlePress('2')} color="#FFFFFF" />
        <Button title="3" onPress={() => handlePress('3')} color="#FFFFFF" />
        <Button title="-" onPress={() => handlePress('-')} color="#808080" />
      </View>
      <View style={styles.row}>
        <Button title="C" onPress={clearDisplay} color="#FF6347" />
        <Button title="0" onPress={() => handlePress('0')} color="#808080" />
        <Button title="=" onPress={calculateResult} color="#32CD32" />
        <Button title="+" onPress={() => handlePress('+')} color="#808080" />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    borderRadius: 160,
    height: 120,
  },
  text: {
    fontSize: 24,
    color: '#222',
  },
  display: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#333',
    padding: 100,
  },
  displayText: {
    fontSize: 40,
    color: '#FFF',
  },
});

export default App;

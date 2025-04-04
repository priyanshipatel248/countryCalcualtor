import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../utils/theme';

interface KeypadProps {
  onPress: (value: string) => void;
  onDelete: () => void;
}

const Keypad = ({onPress, onDelete}: KeypadProps) => {
  const keys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.', '⌫'],
  ];

  const handlePress = (key: string) => {
    if (key === '⌫') {
      onDelete();
    } else {
      onPress(key);
    }
  };

  return (
    <View style={styles.container}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              style={styles.key}
              onPress={() => handlePress(key)}>
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  key: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 35,
    
  },
  keyText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
  },
});

export default Keypad; 
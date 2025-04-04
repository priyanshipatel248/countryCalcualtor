import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {screenWidth} from '../utils/constant';
import React, {useState} from 'react';
import {colors} from '../utils/theme';
import {images} from '../utils/images';
import Input from '../components/input';
import Keypad from '../components/Keypad';
import Header from '../components/header';

const Currency = () => {
  const navigation = useNavigation();
  const [countryOne, setCountryOne] = useState('USD');
  const [countryTwo, setCountryTwo] = useState('INR');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [activeInput, setActiveInput] = useState('from');

  const handleFromAmountChange = (amount: string) => {
    setFromAmount(amount);

    if (countryOne === 'USD' && countryTwo === 'INR') {
      setToAmount((parseFloat(amount || '0') * 76).toString());
    }
  };

  const handleToAmountChange = (amount: string) => {
    setToAmount(amount);
    // Reverse conversion
    if (countryOne === 'USD' && countryTwo === 'INR') {
      setFromAmount((parseFloat(amount || '0') / 76).toString());
    }
  };

  const handleKeyPress = (value: string) => {
    const currentAmount = activeInput === 'from' ? fromAmount : toAmount;
    const newAmount = currentAmount + value;

    if (activeInput === 'from') {
      handleFromAmountChange(newAmount);
    } else {
      handleToAmountChange(newAmount);
    }
  };

  const handleDelete = () => {
    const currentAmount = activeInput === 'from' ? fromAmount : toAmount;
    const newAmount = currentAmount.slice(0, -1);

    if (activeInput === 'from') {
      handleFromAmountChange(newAmount);
    } else {
      handleToAmountChange(newAmount);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}> </SafeAreaView>
      <View style={styles.content}>
        <Header />

        <View style={styles.converterCard}>
          <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => setActiveInput('from')}>
            <Input
              value={fromAmount}
              inputValue={fromAmount}
              countryCode={countryOne}
              onCountryChange={setCountryOne}
              onChangeText={handleFromAmountChange}
              placeholder="0.00"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveInput('to')}>
            <Input
              value={toAmount}
              inputValue={toAmount}
              countryCode={countryTwo}
              onCountryChange={setCountryTwo}
              onChangeText={handleToAmountChange}
              placeholder="0.00"
            
            />
          </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Country');
            }}>
            <Text style={styles.buttonText}>CONVERT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.keypad}>
        <Keypad onPress={handleKeyPress} onDelete={handleDelete} />
      </View>

      <SafeAreaView
        style={{flex: 0, backgroundColor: colors.white}}></SafeAreaView>
    </View>
  );
};

export default Currency;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: colors.white, flex: 1},
  container: {
    flex: 0,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 70,

    borderBottomRightRadius: 70,
    width: screenWidth,
    alignSelf: 'center',
  },

  converterCard: {
    backgroundColor: colors.white,
    marginTop: 100,
    zIndex: 100,
    width: screenWidth - 40,
    alignSelf: 'center',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  inputContainer:{
   padding:15
    
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 16,
    alignSelf: 'center',
    // marginTop: 16,
    position: 'absolute',
    bottom: -20,

  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  keypad: {
    flex: 1,
    paddingTop:50,
    backgroundColor: colors.white,
  
  },
});

import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/theme';
import {Dropdown} from 'react-native-element-dropdown';
import {data} from '../utils/constant';

interface InputProps {
  value: string;
  inputValue: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  countryCode: string;
  onCountryChange: (value: string) => void;
}

interface CountryItem {
  label: string;
  value: string;
  image: any;
}

const renderItem = (item: CountryItem) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.flag} />
    <Text style={styles.itemText}>{item.label}</Text>
  </View>
);

const Input = (props: InputProps) => {
  const {placeholder, inputValue, onChangeText, countryCode, onCountryChange} = props;

  const selectedCountry = data.find((item) => item.value === countryCode);
  
  return (
    <View style={styles.container}>
      <View style={styles.countryView}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select country"
          value={countryCode}
          onChange={item => onCountryChange(item.value)}
          renderLeftIcon={() => (
            selectedCountry ? (
              <Image
                source={selectedCountry.image}
                style={styles.flag}
              />
            ) : null
          )}
          renderItem={renderItem}
        />
        <TextInput
          onChangeText={onChangeText}
          value={inputValue}
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  countryView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
  },
  dropdown: {
    width: 120,
    height: 50,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
  },
  textInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: colors.gray,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.white,
    paddingVertical: 15,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#666',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#000',
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
    resizeMode: 'contain',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 14,
    color: colors.textPrimary,
    marginLeft: 8,
  },
});

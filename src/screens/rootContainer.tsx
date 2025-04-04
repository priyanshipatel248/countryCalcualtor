import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Currency from './currency';
import Country from './country';

const Stack = createNativeStackNavigator();
const RootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="currency" component={Currency} options={{headerShown: false}} />
        <Stack.Screen name="Country" component={Country} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootContainer;

const styles = StyleSheet.create({});

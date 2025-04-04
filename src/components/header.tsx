import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../utils/images';
import { colors } from '../utils/theme';

const Header = () => {
  return (
    <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={images.menu}
              style={styles.icon}
              resizeMode="contain"
              tintColor={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={images.profile}
              style={styles.icon}
              resizeMode="contain"
              tintColor={colors.white}
            />
          </TouchableOpacity>
        </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
      },
      icon: {
        width: 24,
        height: 24,
      },
})
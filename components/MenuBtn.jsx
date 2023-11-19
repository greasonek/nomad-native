import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MenuBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={StyleSheet.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    color: 'black',
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default MenuBtn;
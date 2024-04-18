import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import FeatherIcon from 'react-native-vector-icons/Feather'

export function ScreenHeaderBtn({iconURL, dimension, handlePress, icon}) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={ handlePress}>
      <FeatherIcon name={icon} size={dimension} color={COLORS.black} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightWhite, //should this be lightWhite or white?
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});


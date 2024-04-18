import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({text, handlePress}) {
  return (
    <TouchableOpacity
    onPress={() => {
      handlePress();
    }}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
})
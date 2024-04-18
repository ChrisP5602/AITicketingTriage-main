import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Card from './Card'
import { COLORS } from '../../../constants'
import {Link} from 'expo-router'

export default function CardList({ tickets}) {
  return (
    <FlatList
      data={tickets}
      keyExtractor={(ticket, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<Text style={styles.title}>Tickets</Text>}
      renderItem={({ item: { id, created_at, title, description, device, progress, user, technician, price, claimed_at }, index }) => (
        <Card
          key={id}
          technician={technician}
          title={title}
          price={price}
          device={device}
          progress={progress}
          handlePress={() => {}}
          description={description}
          id={id}
          created_at={created_at}
        />
      )}
    />
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  scrollContainer: {
    backgroundColor: COLORS.white,
  },
})
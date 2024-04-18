import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useTicket } from '../../../api/tickets';

export default function ticketdetails() {

  const { id } = useLocalSearchParams();
  const ticket = useTicket(id);
  console.log(ticket)

  if (!ticket.data) {
    return (
      <ActivityIndicator />
    );
  }

  return (
    <View>
      <Text style={styles.title}>{ticket.data.title}</Text>
      <Text style={styles.description}>{ticket.data.description}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Device:</Text>
        <Text style={styles.value}>{ticket.data.device}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>${ticket.data.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{ticket.data.progress}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Created At:</Text>
        <Text style={styles.value}>{ticket.data.created_at}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    color: '#444',
  },
});
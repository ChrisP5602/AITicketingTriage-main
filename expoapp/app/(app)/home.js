import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { COLORS, icons } from '../../constants';
import { useAuth } from '../../providers/AuthProvider';
import { fetchTickets } from '../../api/tickets';
import CardList from '../../components/home/page/CardList';


export default function home() {
  const {session} = useAuth();



  const {data: tickets, error, isLoading} = fetchTickets(session);

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Failed to fetch tickets</Text>
   }


  return (
      <SafeAreaView style={[{ flex: 1, backgroundColor: COLORS.lightWhite}, tickets.length === 0 ? {alignItems: 'center', justifyContent: 'center'} : {}]}>
        {tickets.length > 0 ? (
          <CardList tickets={tickets} />
        ) : (
          <Text>No tickets exist</Text>
        )}
      </SafeAreaView>
  );
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
});
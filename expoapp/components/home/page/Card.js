import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../constants';
import { router } from 'expo-router';

export default function Card({ index, id, title, technician, created_at, device, progress, price, claimed_at }) {
  return (
    <View
      key={index}
      style={[
        styles.cardWrapper,
        index === 0 && { borderTopWidth: 0 },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          router.push(`/(app)/ticketdetails/${id}`);
        }}
      >
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={[styles.cardLogo, { backgroundColor: COLORS.tertiary }]}>
              <FeatherIcon
                color="#fff"
                name="settings"
                size={24}
              />
            </View>

            <View style={styles.cardBody}>
              <View>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardCompany}>{technician ? {technician} : "No technician assigned"}</Text>
              </View>

              <Text style={styles.cardSalary}>
                {price ? `$${price.toString()}` : 'No price assigned'}
              </Text>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <View style={styles.cardFooterItem}>
              <FeatherIcon
                color="#464646"
                name="tablet"
                size={14}
              />
              <Text style={styles.cardFooterItemText}>{device}</Text>
            </View>

            <View style={[styles.cardFooterItem, { marginLeft: 'auto' }]}>
              <FeatherIcon
                color="#464646"
                name="calendar"
                size={14}
              />
              <Text style={styles.cardFooterItemText}>{created_at}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    paddingVertical: 14,
  },
  cardWrapper: {
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardLogo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#272727',
    marginBottom: 4,
  },
  cardCompany: {
    fontSize: 14,
    fontWeight: '500',
    color: '#818181',
  },
  cardSalary: {
    fontSize: 15,
    fontWeight: '700',
    color: '#959796',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    marginTop: 8,
    marginHorizontal: -8,
  },
  cardFooterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  cardFooterItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#464646',
    marginLeft: 4,
  },
})
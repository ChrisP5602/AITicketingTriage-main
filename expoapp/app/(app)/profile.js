import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Account from '../../components/Account'
import { useAuth } from '../../providers/AuthProvider'

export default function profile() {
  const session = useAuth()
  return (
    <SafeAreaView>
      <Account session={session}/>
    </SafeAreaView>
  )
}
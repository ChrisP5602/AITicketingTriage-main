import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { Redirect, Stack } from 'expo-router'

export default function AdminLayout() {
  const {isTech, loading} = useAuth()

  if(loading){
    return <ActivityIndicator />
  }
  
  if(!isTech){
    return <Redirect href = {"/"} />
  }
  
 
  return (
    <Stack />
  )
}
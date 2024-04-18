import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAuth } from '../../providers/AuthProvider'
import { Redirect, router, Stack } from 'expo-router';
import { COLORS, icons } from '../../constants';
import { ScreenHeaderBtn } from '../../components/home/header/ScreenHeader';


export default function HomeLayout() {

  const handleSettingsPress = () => {
    router.push('/(app)/settings');
  }

  const handlePlusPress = () => { 
    router.push('/(app)/modalticket');
  }

  const {session, loading} = useAuth();

  if(loading){
    return <ActivityIndicator />
  }

  if(!session) {
    return <Redirect href={'/'} />
  }
  

  return (
    <Stack>
      <Stack.Screen
        name="modalticket"
        options={{
          presentation: 'modal',
          title: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn icon={'x'} dimension={24} handlePress={() => router.replace('/(app)/home')} />
          ),
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerTintColor: 'black',
        }}
      />
      <Stack.Screen 
        name="home"
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: '',
            headerLeft: () => (
              <ScreenHeaderBtn icon={'plus'} dimension={24} handlePress={handlePlusPress} />
            ),
            headerRight: () => (
              <ScreenHeaderBtn  icon ={'settings'} dimension={24} handlePress={handleSettingsPress} />
            ), 
          }}
        />
    </Stack>
  )
}
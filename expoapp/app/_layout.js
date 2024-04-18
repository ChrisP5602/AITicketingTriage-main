import { Stack } from 'expo-router/stack';
import React, { useEffect } from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AuthProvider from '../providers/AuthProvider';
import QueryProvider from '../providers/QueryProvider';


SplashScreen.preventAutoHideAsync()

export default function Layout() {
 
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),

  })

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

 
  return (
    <AuthProvider>
      <QueryProvider>
      <Stack
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="(app)" options={{}} />
      <Stack.Screen name="(admin)" options={{}} />
      </Stack>
      </QueryProvider>
    </AuthProvider>
   
    
  )
}

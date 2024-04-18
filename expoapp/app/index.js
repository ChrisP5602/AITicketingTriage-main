import {View, Text, SafeAreaView, Image, StyleSheet, Pressable, Platform, StatusBar, ActivityIndicator} from "react-native"
import {COLORS, FONT, SIZES, SHADOWS, icons, images} from "../constants"
import { useState, useEffect } from "react"
import {Stack, router, Link, Redirect} from "expo-router"
import * as WebBrowser from 'expo-web-browser'
import { supabase } from "../lib/supabase"
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from "../providers/AuthProvider"

export default function Home() {
  const {session, loading, isTechnician} = useAuth();

  if (loading) {
    return <ActivityIndicator />
  }
  // must add routing for the technicians (throws errors for some reason)
  if (session && !isTechnician){
    return <Redirect href={'/(app)/home'} />
  }

  
  return(
    <SafeAreaView style ={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: "",
        }}
      />

      <View style={styles.hero}>
        <Image 
          source={ images.landingImage} /* add image */
          style={styles.heroImg}
          resizeMode= 'contain'
        />

      </View>

     <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Lorem ipsum dolor 
        </Text>

        <Text style={styles.message}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur 
        </Text>
        
      </View>

        <Link href='/login' asChild>
          <Pressable style={styles.btn} onPress={() => {
            
          }}>
            <Text style={styles.btnText}>User</Text>
          </Pressable>
        </Link>
        <Link href='/login' asChild>
          <Pressable style={styles.btn} onPress={() => {
            
          }}>
            <Text style={styles.btnText}>Admin</Text>
          </Pressable>
        </Link>
        

        

     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  content: {
    paddingTop: 10,
    padding: 24,
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    paddingHorizontal: SIZES.xLarge,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    lineHeight: SIZES.xlarge,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center'
  },
  hero: {
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.medium,
    margin: 12,
    borderRadius: SIZES.small + 12,
  },
  heroImg: {
    width: "100%",
    height: 300,
    borderRadius: SIZES.Large,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium
  },
  btnText: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    fontWeight: '500',
    color: COLORS.white
  },
  loginText: {
    fontSize: SIZES.small,
    textAlign: 'center',
  }
})
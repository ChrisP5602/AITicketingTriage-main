import { router, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, View, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { supabase } from '../lib/supabase';
import {COLORS} from '../constants/index';


export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('');

  

  
  async function signUpWithEmail(role) {
    setLoading(true);
    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            // This metadata is for internal use and won't directly update the profiles table
            user_type: role,
          },
        },
      });
  
      if (signUpError) {
        throw signUpError;
      }
  
      if (signUpData.user) {
        // Wait for the user profile to be created by the trigger
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to ensure trigger has time to create the profile
  
        // Update the profile with the user_type
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ user_type: role })
          .match({ id: signUpData.user.id });
  
        if (updateError) {
          throw updateError;
        }
      }
  
      // Handle success (e.g., navigate to the dashboard)
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error (e.g., show an error message)
    } finally {
      setLoading(false);
    }
  }
  

  return (
    

    
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen 
        options={{
          headerShadowVisible: false,
          headerTransparent: false,
          title: "",
          headerTintColor: COLORS.primary,
          
        }}
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonCustomer]}
            disabled={loading}
            onPress={() => signUpWithEmail('customer')}
          >
            <Text style={styles.buttonText}>Sign Up as Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonTechnician]}
            disabled={loading}
            onPress={() => signUpWithEmail('technician')}
          >
            <Text style={styles.buttonText}>Sign Up as Technician</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 400,
  },
  input: {
    width: '80%',
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#cccccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCustomer: {
    backgroundColor: '#4CAF50',
  },
  buttonTechnician: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
  },
});

import { Stack, router } from 'expo-router'
import {COLORS, FONT, SIZES, SHADOWS, icons, images} from "../constants"
import {supabase} from '../lib/supabase'
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  
  export default function signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    

    const SignUpwithEmail = async() => {
      setLoading(true)
      if (password === confirmPassword) {
        const [firstName, lastName] = name.split(' ');
        const {error} = await supabase.auth.signUp({
          email,
          password, 
        },
        {
          data: {name, firstName, lastName }
        })
  
        if (error) {
          Alert.alert(error.message)
          console.log(error)
        } 
        if (!error) {
          router.replace('/(app)/home')
        }
      } else (Alert.alert("Passwords do not match"))
      setLoading(false)

    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Stack.Screen
      options={{
        headerShown: false
      }}
    />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Sign Up</Text>
  
            <Text style={styles.subtitle}>Create an account to continue</Text>
          </View>
  
          <KeyboardAwareScrollView>
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Full name</Text>
  
                <TextInput
                  onChangeText={fullname => setName(fullname)}
                  placeholder="John Doe"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={name} />
              </View>
  
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Email address</Text>
  
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={email => setEmail(email)}
                  placeholder="john@example.com"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={email} />
              </View>
  
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Password</Text>
  
                <TextInput
                  autoCorrect={false}
                  onChangeText={password => setPassword(password)}
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={password} />
              </View>
  
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
  
                <TextInput
                  autoCorrect={false}
                  onChangeText={confirmPassword =>
                    setConfirmPassword(confirmPassword)
                  }
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={confirmPassword} />
              </View>
  
              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    SignUpwithEmail();
                  }}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>{loading ? "Signing Up..." : "Sign Up"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
  
              <TouchableOpacity
                onPress={() => {
                  router.replace('/login')
                }}>
                <Text style={styles.formFooter}>
                  Already have an account?{' '}
                  <Text style={{ textDecorationLine: 'underline' }}>Sign In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    header: {
      marginVertical: 24,
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#1d1d1d',
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: '500',
      color: '#929292',
    },
    /** Form */
    form: {
      paddingHorizontal: 24,
    },
    formAction: {
      marginVertical: 24,
    },
    formFooter: {
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
      textAlign: 'center',
    },
    /** Input */
    input: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '600',
      color: '#222',
      marginBottom: 8,
    },
    inputControl: {
      height: 44,
      backgroundColor: '#f1f5f9',
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: '500',
      color: '#222',
    },
    /** Button */
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      backgroundColor: '#007aff',
      borderColor: '#007aff',
    },
    btnText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: '600',
      color: '#fff',
    },
  });
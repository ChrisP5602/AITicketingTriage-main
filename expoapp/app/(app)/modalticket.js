import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';  
import { Stack, router } from 'expo-router';



export default function modalticket() {
  const [title, setTitle] = useState('')
  const [tech, setTech] = useState('');
  const [device, setDevice] = useState('');
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')
  const isPresented = router.canGoBack();
  
  const CreateTicket = async() => {
    setLoading(true)
    //some logic to insert ticket into the database

    setLoading(false)
   }

  



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{headerShown: true}}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create ticket</Text>

          <Text style={styles.subtitle}>Fill the following information as accurately as possible</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Ticket title</Text>

              <TextInput
                onChangeText={title => setTitle(title)}
                placeholder="Laptop Repair"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={title} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Technician username</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={tech => setTech(tech)}
                placeholder="example-technician14"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={tech} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Device</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={device => setDevice(device)}
                placeholder="Macbook Pro 2019"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={device} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Description</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={description =>
                  setDescription(description)
                }
                
                placeholder="Description of the issue"
                placeholderTextColor="#6b7280"
                style={styles.descriptionInput}
                multiline={true}
                value={description} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  CreateTicket();
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>{loading ? "Creating Ticket..." : "Create ticket"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  )
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
  descriptionInput: {
    paddingTop: 16,
    height: 100,
    textAlignVertical: 'top',
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
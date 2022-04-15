// In App.js in a new project

import * as React from 'react';
import { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function FormAuthenticate({ navigation }) {
  const [isRegister, setIsRegister] = useState(false)
  const [input, setInput] = useState({
    username: '',
    password: '',
    email: ''
  })

  function onChangeText(key) {
    return value => {
      setInput({
        ...input,
        [key]: value
      })
    }
  }

  function handleSubmit() {
    if (input.username === '' || input.password === '') {
      alert('Please check your enters')
      return
    }
    if (isRegister) {
      if (input.email === ''){
        alert('Please check your enters')
        return
      }
      // register
    }
    // dispatch login then get user (name and token)
    // save data in storage
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text>{isRegister ? 'Register' : 'Log in'} Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('username')}
        value={input.username}
        placeholder="username"
      />
      {
        isRegister && 
        <TextInput
          style={styles.input}
          onChangeText={onChangeText('email')}
          value={input.email}
          placeholder="email"
        />
      }
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('password')}
        value={input.password}
        placeholder="password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title={isRegister ? 'Register' : 'Log in'}
          onPress={handleSubmit}
        />
        <Button
          style={styles.button}
          title={isRegister ? 'Move to Login' : 'Move to Register'}
          onPress={() => setIsRegister(prevState => !prevState)}
        />
      </View>
    </View>
  );
}

export default function AuthScreen({ navigation }) {
  return <FormAuthenticate navigation={navigation} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  input: {
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    paddingHorizontal: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    margin: 16
  }
})
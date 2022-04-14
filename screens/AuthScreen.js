// In App.js in a new project

import * as React from 'react';
import { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function LoginScreen({ navigation, setRedirectToRegister }) {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  function onChangeText(key) {
    return value => {
      setInput({
        [key]: value
      })
    }
  }

  function handleSubmit() {
    // dispatch login then get user (name and token)
    // save data in storage
    navigation.navigate('Profile')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('username')}
        value={input.username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('password')}
        value={input.password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button
        title='Login'
        onPress={handleSubmit}
      />
      <Button
        title='Move to Register'
        onPress={() => setRedirectToRegister(true)}
      />
    </View>
  );
}

function RegisterScreen({ navigation, setRedirectToRegister }) {
  const [input, setInput] = useState({
    username: '',
    password: '',
    email: ''
  })

  function onChangeText(key) {
    return value => {
      setInput({
        [key]: value
      })
    }
  }

  function handleSubmit() {
    // dispatch login then get user (name and token)
    // save data in storage
    navigation.navigate('Profile')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('username')}
        value={input.username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('email')}
        value={input.email}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText('password')}
        value={input.password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button
        title='Register'
        onPress={handleSubmit}
      />
      <Button
        title='Move to Login'
        onPress={() => setRedirectToRegister(false)}
      />
    </View>
  );
}

export default function AuthScreen({ navigation }) {
  const [redirectToRegister, setRedirectToRegister] = useState(false)

  if (redirectToRegister) {
    return <RegisterScreen setRedirectToRegister={setRedirectToRegister} />
  }

  return <LoginScreen setRedirectToRegister={setRedirectToRegister} />
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
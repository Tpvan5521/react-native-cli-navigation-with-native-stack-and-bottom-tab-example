// In App.js in a new project

import * as React from 'react';
import { useState } from 'react'
import { View, Text, Button } from 'react-native';

export default function SettingScreen() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      {isAuth ? 
      <Button
       title="Log out"
       onPress={()=>{}}
       /> : 
       <Button
        title="Log in"
        onPress={()=>{}}
        />}
    </View>
  );
}
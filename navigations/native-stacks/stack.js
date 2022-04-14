import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import HomeScreen from '../../screens/HomeScreen'
import DetailsScreen from '../../screens/DetailsScreen'
import SettingScreen from '../../screens/SettingScreen';
import ProfileScreen from '../../screens/ProfileScreen'
import AuthScreen from '../../screens/AuthScreen';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}

export function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Authentication" component={AuthScreen} />
    </Stack.Navigator>
  );
}
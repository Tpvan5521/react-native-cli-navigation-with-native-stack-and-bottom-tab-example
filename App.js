import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import { StatusBar } from 'react-native'
import BottomTab from './navigations/bottom-tabs/tab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' />
    <BottomTab />
    </>
  );
}
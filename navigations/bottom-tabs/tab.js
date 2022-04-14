import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import { MainStack, SettingStack, ProfileStack } from '../native-stacks/stack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          header: () => {return null}
      }}>
        <Tab.Screen name="Home " component={MainStack} />
        <Tab.Screen name="Profile " component={ProfileStack} />
        <Tab.Screen name="Settings " component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
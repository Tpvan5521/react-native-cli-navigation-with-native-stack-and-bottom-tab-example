// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

export default function ComponentLoading() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}
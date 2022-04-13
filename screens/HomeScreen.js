// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="To Details"
        color="#f194ff"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
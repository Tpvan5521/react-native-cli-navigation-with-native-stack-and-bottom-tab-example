import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'

import { StatusBar } from 'react-native'
import BottomTab from './navigations/bottom-tabs/tab';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' />
      <BottomTab />
    </Provider>
  );
}
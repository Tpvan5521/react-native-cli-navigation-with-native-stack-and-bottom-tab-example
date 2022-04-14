import * as React from 'react';
import { useEffect, useState } from 'react'
import { View } from 'react-native';
import List from '../components/List/List';
import ComponentLoading from '../components/Loading/ComponentLoading';
import ComponentError from '../components/404/ComponentError';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest } from '../store/actions/postAction';

export default function HomeScreen({navigation}) {
  const { posts, pending, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [])

  if (pending) {
    return <ComponentLoading />
  } else {
      return (
        <View>
          <List data={posts} navigation={navigation} />
        </View>
      );
    
  }
}
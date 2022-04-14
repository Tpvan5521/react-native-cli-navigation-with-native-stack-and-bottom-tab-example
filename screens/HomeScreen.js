import * as React from 'react';
import { useEffect, useState } from 'react'
import { View } from 'react-native';
import List from '../components/List/List';
import ComponentLoading from '../components/Loading/ComponentLoading';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest } from '../store/actions/postAction';
import ComponentError from '../components/404/ComponentError';

export default function HomeScreen({navigation}) {
  const { posts, pending, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [])

  if (pending) {
    return <ComponentLoading />
  } else {
    if (error) {
      return <ComponentError />
    }
  }

  return (
    <View>
      <List data={posts} navigation={navigation} />
    </View>
  );
}
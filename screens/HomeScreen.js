import * as React from 'react';
import { useEffect } from 'react'
import { View, Text } from 'react-native';
import List from '../components/List/List';
import ComponentLoading from '../components/Loading/ComponentLoading';
import ComponentError from '../components/404/ComponentError';
import Config from 'react-native-config'

import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest } from '../store/actions/post.action';

export default function HomeScreen({navigation}) {
  const { posts, pending, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [])

  if (pending) {
    return <ComponentLoading />
  }

  return (
    <View>
      <Text>{Config.NODE_ENV}</Text>
      <List data={posts} navigation={navigation} />
    </View>
  );
}

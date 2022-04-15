// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import ComponentLoading from '../components/Loading/ComponentLoading';
import ComponentError from '../components/404/ComponentError';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostRequest } from '../store/actions/post.action';

export default function DetailsScreen({route}) {
  const { post, pending, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostRequest(route.params.slug))
  }, [])

  if (pending) {
    return <ComponentLoading />
  } else {
    if (error) {
      return <ComponentError />
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>{post ? post.title : 'null'}</Text>
        </View>
      );
    }
  }

}
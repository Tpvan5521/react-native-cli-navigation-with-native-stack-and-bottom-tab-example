// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { getPostBySlug } from '../http/posts';

export default function DetailsScreen({route}) {
  const [details, setDetails] = useState({})
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    (async() => {
      const slug = await route.params.slug
      const post = await getPostBySlug(slug)
      if(post) {
        setDetails(post)
      }
    })()
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{details.title ? details.title : 'null'}</Text>
    </View>
  );
}
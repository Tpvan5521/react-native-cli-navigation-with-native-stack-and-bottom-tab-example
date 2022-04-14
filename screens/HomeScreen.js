import * as React from 'react';
import { useEffect, useState } from 'react'
import { View } from 'react-native';
import List from '../components/List/List';
import ComponentLoading from '../components/Loading/ComponentLoading';

import { getPosts } from '../http/posts';

export default function HomeScreen({navigation}) {
  const [list, setList] = useState([])
  const [loadingList, setLoadingList] = useState(true)

  useEffect(() => {
    (async() => {
      const posts = await getPosts()
      if(posts) {
        setList(posts)
        setLoadingList(false)
      }
    })()
  }, [])

  if (loadingList) {
    return <ComponentLoading />
  }

  return (
    <View>
      <List data={list} navigation={navigation} />
    </View>
  );
}
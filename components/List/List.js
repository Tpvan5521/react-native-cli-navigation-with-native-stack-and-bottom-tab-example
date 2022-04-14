import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native';
import Item from './Item';

export default function List({ data, navigation }) {
  const renderItem = ({ item }) => {
    return (
      <Item title={item.title} slug={item.slug} navigation={navigation} />
    )
  };

  return (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.slug}
    />
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16
    },
    text: {
        color: '#000'
    }
})
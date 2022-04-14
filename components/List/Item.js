import * as React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const Item = ({ title, slug, navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Details', {
                slug: slug
            })}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default Item

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 4
    },
    text: {
        color: '#000'
    }
})
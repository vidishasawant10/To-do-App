import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default TodoList = ({list}) => {
    return (
        <View style ={[styles.listContainer, {backgroundColor}]}>
            <Text>{list.name} Title</Text>
        </View>
    );
};

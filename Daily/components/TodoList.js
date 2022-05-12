import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TodoColors from '../TodoColors';

export default TodoList = ({list}) => {
    return (
        <View style ={[styles.listContainer, {backgroundColor: TodoColors.skyBlue}]}>
            <Text style ={styles.listTitle} numberOfLines = {2}>
                {list.name}
            </Text>
            <View>
                <View style ={{alignItems: "center"}}>
                    <Text style ={styles.count}>0 </Text>
                    <Text style ={styles.subtitle}>Remaning</Text>
                </View>
                <View style ={{alignItems: "center"}}>
                    <Text style ={styles.count}>0 </Text>
                    <Text style ={styles.subtitle}>Completed</Text>
                </View>
            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    listContainer:{
        flexDirection:"column",
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        marginTop: 10,
        alignItems:"center",
        justifyContent: "center",
        width: 200
    },
    listTitle:{
        fontSize: 24,
        fontWeight:"700",
        color:Colors.black,
        marginBottom:18
    }
})

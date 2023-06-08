import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>
                     {props.text}
                </Text>
            </View>
            <TouchableOpacity style={styles.circular}>
            </TouchableOpacity>
            
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',

    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#55bcf6",
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    itemText:{
        maxWidth:'80%',
    },
    circular:{
        width:18,
        height:18,
        borderColor:'#55bcf6',
        borderWidth:2,
        borderRadius:10
    },
    plus:{
        paddingLeft:3
    }
});

export default Task;
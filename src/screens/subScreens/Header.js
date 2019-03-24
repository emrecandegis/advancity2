
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Header extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height : '7%',
        alignItems : 'center',
        justifyContent  : 'center',
        backgroundColor : 'gray'
    },
    text:{
        fontSize: 26,
        color   : 'white'
    }
});
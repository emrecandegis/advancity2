
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class AccountScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>AccountScreenScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
});
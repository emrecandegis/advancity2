
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class ArchiveScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>ArchiveScreenScreen </Text>
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
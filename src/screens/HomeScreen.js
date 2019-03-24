
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
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
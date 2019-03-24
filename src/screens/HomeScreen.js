
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from "./subScreens/Header";


export class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Giriş',
    };
    render() {
        return (
            <View style={styles.container}>
                <Header title={"Giriş"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection: 'column',
    }
});
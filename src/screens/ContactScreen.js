
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from "./subScreens/Header";

export class ContactScreen extends Component{
    static navigationOptions = {
        title: 'İletişim',
    };
    render() {
        return (
            <View style={styles.container}>
                <Header title={"İletişim"}/>
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
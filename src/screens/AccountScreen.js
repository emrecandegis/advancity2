
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from "./subScreens/Header";

export class AccountScreen extends Component{
    static navigationOptions = {
        title: 'Hesabım',
    };

    render() {
        return (
            <View style={styles.container}>
                <Header title={"Hesabım"}/>
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
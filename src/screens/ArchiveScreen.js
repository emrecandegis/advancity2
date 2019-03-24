
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from "./subScreens/Header";

export class ArchiveScreen extends Component{
    static navigationOptions = {
        title: 'Arşiv',
    };
    render() {
        return (
            <View style={styles.container}>
                <Header title={"Arşiv"}/>
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
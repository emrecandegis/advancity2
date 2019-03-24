
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export class LectureDetailScreen extends Component{

    static navigationOptions =({ navigation }) => ({
        title: navigation.getParam("lectureName","Unnamed")
    });

    render() {
        return (
            <View style={styles.container}>

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
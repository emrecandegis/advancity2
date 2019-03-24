
import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export class LectureDetailScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Lectures Detail Screen</Text>
                <Button title={"geri"} onPress={()=>{this.props.navigation.goBack()}}/>
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
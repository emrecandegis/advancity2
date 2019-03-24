
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export class LecturesScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Lectures Screen</Text>
                <Button title={"Ders Detay"} onPress={()=>{this.props.navigation.navigate("LectureDetail")}}/>
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

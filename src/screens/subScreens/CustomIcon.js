
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export class CustomIcon extends Component{
    render() {
        const icon = this.getCustomIcon(this.props.type);
        return (
            <View>
                {icon}
            </View>
            );
    }

    getCustomIcon(type){
        switch (type) {
            case 1: return this.getCustomIcon1();
            case 2: return this.getCustomIcon2();
            case 3: return this.getCustomIcon3();
            case 4: return this.getCustomIcon4();
            default: return <Text>Hata!</Text>
        }
    }

    getCustomIcon1(){
        return(
            <View style={[styles.container,{backgroundColor:'#ff4957'}]}>
                <Icon size={26} color='white' name = "ios-download" />
                <Text style={styles.text}> Ö</Text>
            </View>);
    }

    getCustomIcon2(){
        return (
        <View style={styles.container}>
            <Text style={styles.quizText}> 1 / 1 </Text>
            <View style={[styles.container,{backgroundColor:'#8cff4b'}]}>
                <Icon size={26} color='white' name = "md-checkbox-outline" />
                <Text style={styles.text}> S</Text>
            </View>
        </View>);

    }

    getCustomIcon3(){
        return(
        <View style={[styles.container,{backgroundColor:'#9d7fff'}]}>
            <Icon size={26} color='white' name = "md-link" />
            <Text style={styles.text}> B</Text>
        </View>);

    }

    getCustomIcon4(){
        return(
        <View style={[styles.container,{backgroundColor:'gray'}]}>
            <Icon size={26} color='white' name = "ios-videocam" />
            <Text style={styles.text}> S.S</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems : 'center',
        justifyContent   : 'center',
        flexDirection    : 'row',
        paddingLeft      : 10,
        paddingRight     : 10
    },
    text:{
        fontSize: 26,
        color   : 'white'
    },
    quizText:{
        fontSize: 20,
        color   : 'gray'
    }
});
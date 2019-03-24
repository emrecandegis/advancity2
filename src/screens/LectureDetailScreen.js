
import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class LectureDetailScreen extends Component{

    static navigationOptions =({ navigation }) => ({
        title: navigation.getParam("lectureName","Unnamed"),
        headerStyle: {
            backgroundColor: '#767679',
        },
        headerTintColor: '#fff',
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonBar}>
                    <TouchableOpacity  style={styles.buttons} >
                        <Icon name="ios-information-circle-outline"
                              color="black"
                              size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} >
                        <Icon name="ios-notifications-outline"
                              color="black"
                              size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} >
                        <Icon name="md-options"
                              color="black"
                              size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} >
                        <Icon name="md-menu"
                              color="black"
                              size={50} />
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',backgroundColor:'red'}}>
                    <Text>Tümü 11 Aktivite</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection: 'column',
    },
    buttonBar:{
        width : '100%',
        height: '10%',
        flexDirection:'row',
        borderBottomWidth: 1,
        backgroundColor: '#767679',
        marginBottom : 8
    },
    buttons:{
        width:'25%',
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginLeft : 1,
        marginRight : 1,
    }
});
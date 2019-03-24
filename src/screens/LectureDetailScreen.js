
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, FlatList} from 'react-native';
import {List,ListItem} from "react-native-elements";

import Icon from 'react-native-vector-icons/Ionicons';
import {CustomIcon} from "./subScreens/CustomIcon";


const icerik = [

    {
        key  : "LMS Nedir ? ",
        type : 1,
        statu: true
    },
    {
        key  : "quiz 1 ",
        type : 2,
        statu: false
    },
    {
        key  : "quiz 2 ",
        type : 2,
        statu: false
    },
    {
        key  : "quiz 3 ",
        type : 2,
        statu: false
    },
    {
        key  : "quiz 4 ",
        type : 2,
        statu: false
    },
    {
        key  : "quiz 5 ",
        type : 2,
        statu: true
    },
    {
        key  : "Eğitimler için LMS farkındalık sunumu",
        type : 3,
        statu: false
    },
    {
        key  : "LMS'e giriş",
        type : 4,
        statu: true
    },

];

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
                <View style={styles.activitesBar}>
                    <View style={{flex:7}}>
                        <Text style={[styles.activitesText,{textAlign: 'left'} ]}>Tümü</Text>
                    </View>
                    <View style={{flex:3}}>
                        <Text style={[styles.activitesText,{textAlign: 'right'} ]}>11 Aktivite</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={ icerik }
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        renderItem={({item}) =>
                            <ListItem
                                rightIcon={<CustomIcon type={item.type}/>}
                                leftIcon={item.statu ? <Icon name = "ios-checkmark-circle-outline" /> : <Icon name = "ios-remove" />}
                                title={item.key}
                                rightElement={<Icon name = "ios-arrow-forward" />}
                            >
                            </ListItem>
                        }
                    />
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
    },
    activitesBar:{
        width : '100%',
        backgroundColor : '#4cd1ff',
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        paddingLeft:10,
        paddingRight : 10
    },
    activitesText:{
        color : 'white',
        fontSize : 20,
    },
    row:{
        flex:1,
        height: 120,
        width: '100%',
        backgroundColor: '#e5e5e5',
        marginBottom:2,
        justifyContent:'center'
    },
});

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList,TouchableHighlight} from 'react-native';
import {Header} from "./subScreens/Header";
import Icon from 'react-native-vector-icons/FontAwesome';

const dersler = [

    { key: "Ders1" },
    { key: "Ders2" },
    { key: "Ders3" },
    { key: "Ders4" },
    { key: "Ders5" },
    { key: "Ders6" },
    { key: "Ders7" },
    { key: "Ders8" },
    { key: "Ders9" },
    { key: "Ders10" },
    { key: "Ders11" },
    { key: "Ders12" },
    { key: "Ders13" },
    { key: "Ders14" },
    { key: "Ders15" },
    { key: "Ders16" },
    { key: "Ders17" },
    { key: "Ders18" },
    { key: "Ders19" }
];

export class LecturesScreen extends Component{
    static navigationOptions = {
        header:null
    };
    FlatListItemSeparator = () => {
        return (
            <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Header title={"Derslerim"}/>
                <View>
                    <FlatList
                        data={ dersler }
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        renderItem={({item}) =>
                            <TouchableHighlight style={styles.row} onPress={()=>{this.props.navigation.navigate("LectureDetail",{lectureName:item.key})}} >
                                <View style={styles.column}>
                                    <View style={styles.columnLeft}>
                                        <Icon name="book"
                                              color="black"
                                              size={50} />
                                    </View>
                                    <View style={styles.columnMiddle}>
                                        <Text style={styles.headerText}>{item.key}</Text>
                                    </View>
                                    <View style={styles.columnRight}>
                                        <Icon name="angle-right"
                                              color="gray"
                                              size={50} />
                                    </View>
                                </View>
                            </TouchableHighlight>
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
        flexDirection: 'column'
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 45,
    },
    headerText:{
        fontSize:25,
        marginLeft:10,
    },
    row:{
        flex:1,
        height: 120,
        width: '100%',
        backgroundColor: '#e5e5e5',
        marginBottom:2,
        justifyContent:'center'
    },
    column:{
        flexDirection:'row',
        marginLeft:25,

    },

    columnLeft:{
        flex:1,
    },
    columnMiddle:{
        flex:7,
        justifyContent: 'center'
    },

    columnRight:{
        flex:0,
    }
});


import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";

import {LectureDetailScreen} from "./screens/LectureDetailScreen";
import {LecturesScreen} from "./screens/LecturesScreen";

export class Lectures extends Component{
    static navigationOptions = {
        header: null,
        tabBarLabel: 'Dersler'
    };
    render() {
        return (
            <AppContainer/>
        );
    }
}



const StackNavigator = createStackNavigator({
    Lectures: LecturesScreen,
    LectureDetail : LectureDetailScreen
},
    {
        initialRouteName: "Lectures"
    });

const AppContainer =  createAppContainer(StackNavigator);
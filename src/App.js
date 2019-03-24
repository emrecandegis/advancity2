
import React, {Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import {HomeScreen} from "./screens/HomeScreen";
import {ArchiveScreen} from "./screens/ArchiveScreen";
import {Lectures} from "./Lectures";
import {ContactScreen} from "./screens/ContactScreen";
import {AccountScreen} from "./screens/AccountScreen";

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Archive : ArchiveScreen,
  Lectures: Lectures,
  Home    : HomeScreen,
  Contact : ContactScreen,
  Account : AccountScreen
  },
    {
        initialRouteName: "Lectures",
    tabBarOptions : {
        activeTintColor   : 'blue',
        inactiveTintColor : 'black'
    },
    defaultNavigationOptions : ({ navigation }) => ({
        tabBarIcon :({ focused }) => {
            const  {routeName} = navigation.state;
            let iconName;
            switch (routeName) {
                case "Archive"  : iconName = "archive"; break;
                case "Lectures" : iconName = "list-ul"; break;
                case "Home"     : iconName = "home"; break;
                case "Contact"  : iconName = "envelope-o"; break;
                case "Account"  : iconName = "gears"; break;
            }
            return <Icon name={iconName} size={25} color={focused ? 'blue':'gray'} />;
        }
    })

});

const AppContainer =  createAppContainer(TabNavigator);
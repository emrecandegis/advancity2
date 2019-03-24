

import React, {Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import {HomeScreen} from "./screens/HomeScreen";
import {ArchiveScreen} from "./screens/ArchiveScreen";
import {Lectures} from "./Lectures";
import {ContactScreen} from "./screens/ContactScreen";
import {AccountScreen} from "./screens/AccountScreen";

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
  });

const AppContainer =  createAppContainer(TabNavigator);
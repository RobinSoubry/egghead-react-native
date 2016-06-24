/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Main from './Main.js';
import Dashboard from './Dashboard.js';

var NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
     return(
       <Text>{ route.leftButton }</Text>
     )
   },
   Title: function( route, navigator, index, navState ){
     return(
       <Text>{ route.title }</Text>
     )
   },
   RightButton: function( route, navigator, index, navState ){
     return(
       <Text>{ route.rightButton }</Text>
     )
   }
  }


class githubNoteTaker extends Component {
  renderScene(route, navigator){
    if(route.title === 'Github Notetaker'){
      return <Main navigator={navigator} />
    } else if (route.title === 'Dashboard') {
      return <Dashboard navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'Github Notetaker'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
          routeMapper={ NavigationBarRouteMapper }
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});

AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);

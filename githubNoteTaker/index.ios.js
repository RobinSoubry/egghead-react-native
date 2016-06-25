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
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Main from './Main.js';
import Dashboard from './Dashboard.js';
import Profile from './Profile.js';
import Badge from './Badge.js';


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
        	 underlayColor="transparent"
           onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>
  	)}
  	else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return ( <TouchableHighlight
    														onPress={ () => route.onPress() }>
                                <Text style={ styles.rightNavButtonText }>
                                  	{ route.rightText || 'Right Button' }
                                </Text>
                              </TouchableHighlight> )
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>Pioneer</Text>
  }
};


class githubNoteTaker extends Component {
  renderScene(route, navigator){
    if(route.title === 'Github Notetaker'){
      return <Main navigator={navigator} />
    } else if (route.title === 'Dashboard') {
      return <Dashboard navigator={navigator} {...route.passProps} />
    } else if (route.title === 'Profile Page') {
      return <Profile navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      // <Navigator
      //  initialRoute={{title: 'Github Notetaker'}}
      //  renderScene={this.renderScene.bind(this)}
      //  navigationBar={
      //    <Navigator.NavigationBar
      //    routeMapper={ NavigationBarRouteMapper }
      //    />
      //  }
      ///>

      <Navigator
        style={{flex:1}}
        initialRoute={{title: 'Github Notetaker'}}
        renderScene={ this.renderScene.bind(this) }
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.nav }
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    	flex: 4,
      flexDirection: 'column',
      marginTop:100
    },
    leftNavButtonText: {
    	fontSize: 18,
      marginLeft:13,
      marginTop:2
    },
    rightNavButtonText: {
    	fontSize: 18,
      marginRight:13,
      marginTop:2
    },
    nav: {
    	height: 60,
      backgroundColor: '#efefef'
    },
    title: {
    	marginTop:4,
      fontSize:16
    },
    button: {
    	height:60,
      marginBottom:10,
      backgroundColor: '#efefef',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
    	fontSize:18
    },
});

AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);

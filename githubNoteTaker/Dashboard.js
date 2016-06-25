import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class Dashboard extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text> This is the dashboard </Text>
        <Text> {this.props.userInfo.name} </Text>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

export default Dashboard;

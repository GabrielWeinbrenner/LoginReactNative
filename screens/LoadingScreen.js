import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import firebase from 'firebase';
import DashboardScreen from './DashboardScreen';
import LoginScreen from './LoginScreen';

export default class LoadingScreen extends Component {
    componentDidMount(){
      this.checkIfLoggedIn();
    }
    checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.props.navigation.navigate('DashboardScreen');
        }
        else{
          this.props.navigation.navigate('LoginScreen');
        }
      })
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


      

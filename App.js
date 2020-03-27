import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from '../ReactLogin/screens/LoadingScreen';
import Login from './screens/LoginScreen';
import Dashboard from './screens/DashboardScreen'
import Signup from './screens/SignupScreen';
import {
  createAppContainer, createSwitchNavigator
} from 'react-navigation'

import firebase from './config';

export default class App extends React.Component {
  render(){
    return (
      <AppNavigator/>
    );
  }
}
const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Dashboard: {
    screen: Dashboard
  }
}, {
  initialRouteName: 'Login'
})
const AppNavigator = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

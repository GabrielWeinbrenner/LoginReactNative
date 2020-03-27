import React from 'react'
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import Login from '../screens/LoginScreen'
import Signup from '../screens/SignupScreen'
import Dashboard from '../screens/DashboardScreen'



export default createAppContainer(SwitchNavigator)
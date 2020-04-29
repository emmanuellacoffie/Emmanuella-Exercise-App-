import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Exerciseh from './src/login/exerciseh.js';
import Today from './src/login/homescreen.js';
import Workouts from './src/login/signup.js';
import Programs from './src/login/exerciseh.js';
import Progress from './src/login/homescreen.js';
import Settings from './src/login/signup.js';
import Faqs from './src/login/exerciseh.js';
import Reminders from './src/login/homescreen.js';





const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Sign: { screen: Signup },
  Exerciseh: { screen: Exerciseh },
  Today: {screen: Today},
  Workouts: {screen: Workouts},
  Programs: {screen: Programs},
  Progress: {screen: Progress},
  Settings: {screen: Settings  },
  Faqs: {screen: Faqs},
  Reminders: {screen: Reminders},
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


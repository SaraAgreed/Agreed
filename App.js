
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import ContactUs from './src/components/ContactUs';
import Home from './src/components/Home';
import SplashScreen from './src/components/SplashScreen'

const Navigation = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Home: {
    screen: Home
  },
  ContactUs: {
    screen: ContactUs
  }
});
export default Navigation;
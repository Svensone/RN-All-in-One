import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import { Feather } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import AppleMusicUi from '../screens/AppleMusicUI';
import NasaScreen from '../screens/NasaApi';
import WeatherScreen from '../screens/WeatherScreen';
import VisionApiScreen from '../screens/VisionApiScreen';
import TinderUIScreen from '../screens/TinderUIScreen';



const AppleMusicStack = createStackNavigator({
  Home: AppleMusicUi,
});

AppleMusicStack.navigationOptions = {
  tabBarLabel: 'Apple Music UI',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'music'}
    />
  ),
};

const NasaStack = createStackNavigator({
  Nasa: NasaScreen,
});

NasaStack.navigationOptions = {
  tabBarLabel: 'NASA Api',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'space-shuttle'}
    />
  ),
};

const WeatherStack = createStackNavigator({
  Weather: WeatherScreen,
});

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather App',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'thermometer'}
    />
  ),
};

const VisionApiStack = createStackNavigator({
  VisionApi: VisionApiScreen,
});

VisionApiStack.navigationOptions = {
  tabBarLabel: "Vision Api",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'camera'}
      />
  )
};



const TinderUIStack = createStackNavigator({
  TinderUI: TinderUIScreen,
});

TinderUIStack.navigationOptions = {
  tabBarLabel: "Tinder UI",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'heart'}
    />
  )
}

export default createBottomTabNavigator({
  AppleMusicStack,
  NasaStack,
  WeatherStack,
  VisionApiStack,
  TinderUIStack,
});

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AppleMusicUi from '../screens/AppleMusicUI';
import NasaScreen from '../screens/NasaApi';
import SettingsScreen from '../screens/SettingsScreen';
import VisionApiScreen from '../screens/VisionApiScreen';

const HomeStack = createStackNavigator({
  Home: AppleMusicUi,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Apple Music UI',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
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
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Weather App',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
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
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  NasaStack,
  SettingsStack,
  VisionApiStack,
});

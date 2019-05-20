import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
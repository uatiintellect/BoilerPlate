import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const MyRipple = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press me</Text>
  </TouchableRipple>
);

export default MyRipple;